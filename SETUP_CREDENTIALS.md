# 🔐 GenGc Credentials Setup Guide

## Step 1: Get Supabase Credentials

### A. Create Supabase Project

1. Go to [supabase.com](https://supabase.com)
2. Click **"New Project"**
3. Fill in:
   - **Name:** GenGc
   - **Database Password:** (create a strong password)
   - **Region:** Choose closest to your users (e.g., Mumbai for India)
4. Click **"Create new project"**
5. Wait 2-3 minutes for setup

### B. Get API Keys

1. In your Supabase dashboard, go to **Settings** → **API**
2. Copy these values:

```
Project URL: https://xxxxxxxxxxxxx.supabase.co
anon/public key: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
service_role key: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

### C. Set Up Database

1. Go to **SQL Editor** in Supabase dashboard
2. Click **"New Query"**
3. Copy the entire content from `supabase/schema.sql`
4. Paste and click **"Run"**
5. Wait for success message

### D. Configure Authentication

1. Go to **Authentication** → **Providers**
2. Enable **Email** provider
3. Configure email templates (optional):
   - Go to **Authentication** → **Email Templates**
   - Customize signup confirmation email

---

## Step 2: Get Razorpay Credentials

### A. Create Razorpay Account

1. Go to [razorpay.com](https://razorpay.com)
2. Click **"Sign Up"**
3. Complete KYC verification (required for live mode)

### B. Get Test API Keys (For Development)

1. Login to Razorpay Dashboard
2. Go to **Settings** → **API Keys**
3. Under **Test Mode**, click **"Generate Test Key"**
4. Copy:

```
Key ID: rzp_test_xxxxxxxxxxxxx
Key Secret: xxxxxxxxxxxxxxxxxxxxx
```

### C. Get Live API Keys (For Production)

1. Complete KYC verification
2. Go to **Settings** → **API Keys**
3. Switch to **Live Mode**
4. Click **"Generate Live Key"**
5. Copy:

```
Key ID: rzp_live_xxxxxxxxxxxxx
Key Secret: xxxxxxxxxxxxxxxxxxxxx
```

### D. Configure Webhooks (Important!)

1. Go to **Settings** → **Webhooks**
2. Click **"Add New Webhook"**
3. Enter:
   - **Webhook URL:** `https://your-app.vercel.app/api/webhooks/razorpay`
   - **Secret:** (generate a random string)
   - **Events:** Select all payment events
4. Click **"Create Webhook"**

---

## Step 3: Add Credentials to Vercel

### Option A: Via Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Select your **gengc-app** project
3. Go to **Settings** → **Environment Variables**
4. Add these variables:

```bash
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://xxxxxxxxxxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

# Razorpay (Use test keys for development)
NEXT_PUBLIC_RAZORPAY_KEY_ID=rzp_test_xxxxxxxxxxxxx
RAZORPAY_KEY_SECRET=xxxxxxxxxxxxxxxxxxxxx

# App URL (will be provided after first deployment)
NEXT_PUBLIC_APP_URL=https://gengc-app.vercel.app
```

5. For each variable:
   - Click **"Add New"**
   - Enter **Name** and **Value**
   - Select **All** environments (Production, Preview, Development)
   - Click **"Save"**

### Option B: Via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Link project
vercel link

# Add environment variables
vercel env add NEXT_PUBLIC_SUPABASE_URL
vercel env add NEXT_PUBLIC_SUPABASE_ANON_KEY
vercel env add SUPABASE_SERVICE_ROLE_KEY
vercel env add NEXT_PUBLIC_RAZORPAY_KEY_ID
vercel env add RAZORPAY_KEY_SECRET
vercel env add NEXT_PUBLIC_APP_URL
```

---

## Step 4: Local Development Setup

Create `.env.local` file in your project root:

```bash
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://xxxxxxxxxxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

# Razorpay (Test keys)
NEXT_PUBLIC_RAZORPAY_KEY_ID=rzp_test_xxxxxxxxxxxxx
RAZORPAY_KEY_SECRET=xxxxxxxxxxxxxxxxxxxxx

# App URL
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

**⚠️ IMPORTANT:** Never commit `.env.local` to Git!

---

## Step 5: Test Your Setup

### Test Supabase Connection

```bash
# Run locally
npm run dev

# Try to sign up at http://localhost:3000/auth/signup
# Check if profile is created in Supabase dashboard
```

### Test Razorpay Integration

1. Go to profile page
2. Try to upgrade to Blue tier
3. Use Razorpay test card:
   - **Card Number:** 4111 1111 1111 1111
   - **CVV:** Any 3 digits
   - **Expiry:** Any future date

---

## 🔒 Security Checklist

- [ ] Supabase RLS policies are enabled
- [ ] Service role key is only in server-side code
- [ ] Razorpay webhook secret is configured
- [ ] Environment variables are not in Git
- [ ] Test mode is used for development
- [ ] Live keys are only in production

---

## 🚨 Troubleshooting

### Supabase Connection Failed
- Verify project URL is correct
- Check if anon key is copied completely
- Ensure database schema is executed

### Razorpay Payment Failed
- Verify you're using test keys in test mode
- Check if webhook URL is correct
- Ensure domain is authorized in Razorpay dashboard

### Build Errors
- Check all environment variables are set
- Verify no typos in variable names
- Ensure values don't have extra spaces

---

## 📞 Need Help?

- **Supabase Docs:** [supabase.com/docs](https://supabase.com/docs)
- **Razorpay Docs:** [razorpay.com/docs](https://razorpay.com/docs)
- **Vercel Docs:** [vercel.com/docs](https://vercel.com/docs)

---

**Once all credentials are set up, you're ready to deploy! 🚀**