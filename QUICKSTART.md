# 🚀 GenGc Quick Start Guide

Get your GenGc app running in **under 10 minutes**!

## Prerequisites
- GitHub account
- Vercel account (free)
- Supabase account (free)
- Razorpay account (for payments)

---

## 🎯 Quick Deploy (Fastest Way)

### Step 1: Fork/Clone Repository
```bash
git clone https://github.com/mohitcoded/gengc-app.git
cd gengc-app
```

### Step 2: Set Up Supabase (3 minutes)

1. **Create Project:**
   - Go to [supabase.com/dashboard](https://supabase.com/dashboard)
   - Click "New Project"
   - Name: `GenGc`
   - Choose region closest to you
   - Wait 2 minutes for setup

2. **Run Database Schema:**
   - Go to SQL Editor
   - Copy content from `supabase/schema.sql`
   - Paste and click "Run"
   - ✅ Database ready!

3. **Get API Keys:**
   - Go to Settings → API
   - Copy:
     - `Project URL`
     - `anon public key`
     - `service_role key`

### Step 3: Set Up Razorpay (2 minutes)

1. **Get Test Keys:**
   - Go to [razorpay.com/dashboard](https://razorpay.com/dashboard)
   - Settings → API Keys
   - Generate Test Key
   - Copy `Key ID` and `Key Secret`

### Step 4: Deploy to Vercel (3 minutes)

1. **Import Project:**
   - Go to [vercel.com/new](https://vercel.com/new)
   - Import `mohitcoded/gengc-app`
   - Click "Deploy"

2. **Add Environment Variables:**
   - Go to Settings → Environment Variables
   - Add these:

```bash
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
NEXT_PUBLIC_RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_secret
NEXT_PUBLIC_APP_URL=https://your-app.vercel.app
```

3. **Redeploy:**
   - Go to Deployments
   - Click "Redeploy"
   - ✅ Your app is live!

---

## 🖥️ Local Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Set Up Environment
```bash
# Copy example env file
cp .env.example .env.local

# Edit .env.local with your credentials
nano .env.local
```

### 3. Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## ✅ Verify Setup

### Test Authentication
1. Go to `/auth/signup`
2. Create an account
3. Check Supabase dashboard → Authentication → Users
4. ✅ User should appear with 100 Royal Coins

### Test Database
1. Go to Supabase → Table Editor
2. Check `profiles` table
3. ✅ Your profile should be there

### Test UI
1. Navigate through:
   - Landing page (/)
   - Feed (/feed)
   - GCs (/gcs)
   - Profile (/profile)
   - Create (/create)
2. ✅ All pages should load

---

## 🎨 Customize Your App

### Change Branding
Edit `app/page.tsx`:
```typescript
<h1 className="text-7xl md:text-9xl font-black mb-6">
  <span className="gradient-text">YourBrand</span>
</h1>
```

### Change Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  'gengc-purple': '#8B5CF6',  // Change this
  'gengc-pink': '#EC4899',    // Change this
  'gengc-cyan': '#06B6D4',    // Change this
}
```

### Add Features
- Check `components/` for reusable components
- Check `lib/` for utilities
- Check `app/` for pages

---

## 📱 Test Payments

### Use Razorpay Test Cards

**Success:**
- Card: `4111 1111 1111 1111`
- CVV: Any 3 digits
- Expiry: Any future date

**Failure:**
- Card: `4000 0000 0000 0002`

---

## 🐛 Common Issues

### "Supabase connection failed"
- ✅ Check if URL and keys are correct
- ✅ Verify no extra spaces in .env
- ✅ Ensure database schema is executed

### "Build failed on Vercel"
- ✅ Check all env variables are set
- ✅ Verify Node.js version (18.x+)
- ✅ Check build logs for specific errors

### "Authentication not working"
- ✅ Verify Supabase email provider is enabled
- ✅ Check if RLS policies are created
- ✅ Ensure anon key is correct

---

## 📚 Next Steps

1. **Add Custom Domain:**
   - Vercel → Settings → Domains
   - Add your domain
   - Update DNS records

2. **Enable Production Mode:**
   - Switch Razorpay to live keys
   - Update environment variables
   - Test payments with real cards

3. **Add Features:**
   - Real-time chat (Supabase Realtime)
   - Push notifications
   - Image uploads
   - Video support

4. **Marketing:**
   - Share on social media
   - Get feedback from Gen-Z users
   - Iterate based on feedback

---

## 🎉 You're Live!

Your GenGc app is now running! Share it with the world:

```
🌐 Your App: https://your-app.vercel.app
📱 Mobile-ready: Yes
🔒 Secure: Yes
💰 Payments: Ready
```

**Need help?** Check:
- `README.md` - Full documentation
- `SETUP_CREDENTIALS.md` - Detailed credential setup
- `DEPLOYMENT.md` - Advanced deployment options

---

**Built with 💜 by the GenGc team**