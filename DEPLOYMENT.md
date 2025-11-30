# GenGc Deployment Guide

## 🚀 Quick Deploy to Vercel

### Prerequisites
- GitHub account with the repository
- Vercel account (free tier works)
- Supabase account (free tier works)
- Razorpay account (for payments)

### Step 1: Set Up Supabase

1. Go to [supabase.com](https://supabase.com) and create a new project
2. Wait for the database to initialize
3. Go to **Settings** → **API** and copy:
   - Project URL (`NEXT_PUBLIC_SUPABASE_URL`)
   - Anon/Public key (`NEXT_PUBLIC_SUPABASE_ANON_KEY`)
   - Service Role key (`SUPABASE_SERVICE_ROLE_KEY`)

4. Go to **SQL Editor** and run the database schema from README.md

### Step 2: Set Up Razorpay

1. Go to [razorpay.com](https://razorpay.com) and create an account
2. Go to **Settings** → **API Keys**
3. Generate keys and copy:
   - Key ID (`NEXT_PUBLIC_RAZORPAY_KEY_ID`)
   - Key Secret (`RAZORPAY_KEY_SECRET`)

### Step 3: Deploy to Vercel

#### Option A: Via Vercel Dashboard (Recommended)

1. Go to [vercel.com](https://vercel.com)
2. Click **"Add New Project"**
3. Import your GitHub repository: `mohitcoded/gengc-app`
4. Configure project:
   - Framework Preset: **Next.js**
   - Root Directory: `./`
   - Build Command: `npm run build`
   - Output Directory: `.next`

5. Add Environment Variables:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
   NEXT_PUBLIC_RAZORPAY_KEY_ID=your_razorpay_key_id
   RAZORPAY_KEY_SECRET=your_razorpay_secret
   NEXT_PUBLIC_APP_URL=https://your-app.vercel.app
   ```

6. Click **"Deploy"**
7. Wait 2-3 minutes for deployment to complete
8. Your app will be live at `https://gengc-app.vercel.app`

#### Option B: Via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Follow the prompts and add environment variables when asked
```

### Step 4: Configure Custom Domain (Optional)

1. In Vercel dashboard, go to your project
2. Click **"Settings"** → **"Domains"**
3. Add your custom domain (e.g., `gengc.app`)
4. Follow DNS configuration instructions
5. Wait for SSL certificate to be issued (automatic)

### Step 5: Post-Deployment Setup

1. **Test Authentication:**
   - Visit your deployed URL
   - Try signing up with a test account
   - Verify email confirmation works

2. **Test Database:**
   - Check if profile is created in Supabase
   - Verify Royal Coins are credited (100 welcome bonus)

3. **Enable Razorpay:**
   - Go to Razorpay dashboard
   - Add your deployed URL to authorized domains
   - Test a small payment transaction

### Step 6: Enable Production Features

1. **Supabase:**
   - Enable Row Level Security policies
   - Set up email templates
   - Configure storage buckets for media uploads

2. **Razorpay:**
   - Switch from test mode to live mode
   - Configure webhooks for payment notifications
   - Set up automatic settlements

3. **Vercel:**
   - Enable Analytics
   - Set up monitoring and alerts
   - Configure preview deployments

## 🔧 Environment Variables Reference

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL | Yes |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anonymous key | Yes |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase service role key | Yes |
| `NEXT_PUBLIC_RAZORPAY_KEY_ID` | Razorpay key ID | Yes |
| `RAZORPAY_KEY_SECRET` | Razorpay secret key | Yes |
| `NEXT_PUBLIC_APP_URL` | Your app's URL | Yes |

## 📊 Monitoring & Analytics

### Vercel Analytics
- Automatically enabled for all deployments
- View real-time traffic and performance
- Track Core Web Vitals

### Supabase Monitoring
- Database performance metrics
- API usage statistics
- Storage usage tracking

### Error Tracking (Optional)
Consider adding:
- Sentry for error tracking
- LogRocket for session replay
- Mixpanel for user analytics

## 🔄 Continuous Deployment

Every push to `main` branch automatically:
1. Triggers a new build on Vercel
2. Runs tests (if configured)
3. Deploys to production
4. Invalidates CDN cache

Preview deployments are created for:
- Pull requests
- Non-main branches

## 🛡️ Security Checklist

- [ ] Environment variables are set correctly
- [ ] Supabase RLS policies are enabled
- [ ] API keys are not exposed in client code
- [ ] CORS is configured properly
- [ ] Rate limiting is enabled
- [ ] SSL/HTTPS is enforced
- [ ] Database backups are scheduled

## 🚨 Troubleshooting

### Build Fails
- Check environment variables are set
- Verify Node.js version (18.x recommended)
- Check build logs in Vercel dashboard

### Database Connection Issues
- Verify Supabase URL and keys
- Check if project is paused (free tier)
- Ensure RLS policies allow access

### Payment Issues
- Verify Razorpay keys are correct
- Check if domain is authorized
- Ensure webhook URLs are configured

## 📞 Support

- **Vercel:** [vercel.com/support](https://vercel.com/support)
- **Supabase:** [supabase.com/support](https://supabase.com/support)
- **Razorpay:** [razorpay.com/support](https://razorpay.com/support)

---

**Your GenGc app is now live! 🎉**

Share your deployment URL and start building your Gen-Z empire!