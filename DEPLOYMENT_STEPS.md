# 🚀 Complete Deployment Guide - Hotel Management System

## 📋 Prerequisites

Before deploying, ensure you have:
- [ ] Node.js 18+ installed
- [ ] Git account
- [ ] Vercel account (free)
- [ ] Sanity account (free)
- [ ] GitHub/Google OAuth apps (optional)

---

## 🎯 Step 1: Environment Setup

### 1.1 Update Environment Variables

Edit your `.env.local` file with the secure secret:

```env
# NextAuth Configuration
NEXTAUTH_SECRET=MvyWkLOs0f4GIpQfqOXUU6kVkxYnogf3v/39xAWflHU=
NEXTAUTH_URL=http://localhost:3000

# Sanity CMS Configuration
NEXT_PUBLIC_SANITY_PROJECT_ID=your-sanity-project-id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_STUDIO_TOKEN=your-sanity-token

# Somali Payment Configuration
SOMALI_PAYMENT_ENABLED=true
SOMALI_PAYMENT_WEBHOOK_SECRET=your-somali-webhook-secret

# OAuth Providers (optional)
GITHUB_CLIENT_ID=your-github-client-id
GITHUB_CLIENT_SECRET=your-github-client-secret
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
```

### 1.2 Customize Somali Payment Settings

Edit `src/libs/somali-payment.ts` and update:

```typescript
// Replace with your actual business phone numbers
evc: {
  phoneNumber: '252-61-YOUR-EVC-NUMBER',
  // ... other settings
},
zaad: {
  phoneNumber: '252-61-YOUR-ZAAD-NUMBER',
  // ... other settings
}
// ... update all other payment methods
```

---

## 🎯 Step 2: Sanity CMS Setup

### 2.1 Create Sanity Project

1. Go to [sanity.io](https://sanity.io)
2. Create a new project
3. Choose "Clean project with no predefined schemas"
4. Note your Project ID

### 2.2 Configure Sanity Studio

1. Run Sanity Studio locally:
```bash
npm run dev
```

2. Visit `http://localhost:3000/studio`
3. Create your first document
4. Add your content (rooms, hotels, etc.)

### 2.3 Get API Token

1. Go to [manage.sanity.io](https://manage.sanity.io)
2. Select your project
3. Go to API section
4. Create a new token with "Editor" permissions
5. Copy the token

### 2.4 Update Environment Variables

Replace in `.env.local`:
```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your-actual-project-id
SANITY_STUDIO_TOKEN=your-actual-token
```

---

## 🎯 Step 3: OAuth Setup (Optional)

### 3.1 GitHub OAuth

1. Go to GitHub Settings > Developer settings > OAuth Apps
2. Create new OAuth app
3. Set callback URL: `https://your-domain.vercel.app/api/auth/callback/github`
4. Copy Client ID and Client Secret

### 3.2 Google OAuth

1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create new project
3. Enable Google+ API
4. Create OAuth 2.0 credentials
5. Set redirect URI: `https://your-domain.vercel.app/api/auth/callback/google`
6. Copy Client ID and Client Secret

### 3.3 Update Environment Variables

Add to `.env.local`:
```env
GITHUB_CLIENT_ID=your-github-client-id
GITHUB_CLIENT_SECRET=your-github-client-secret
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
```

---

## 🎯 Step 4: Deploy to Vercel

### 4.1 Prepare for Deployment

1. Commit your changes:
```bash
git add .
git commit -m "Configure Somali payment system"
git push
```

### 4.2 Deploy to Vercel

#### Option A: Vercel CLI
```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

#### Option B: Vercel Dashboard
1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Configure environment variables
5. Deploy

### 4.3 Configure Environment Variables in Vercel

In Vercel dashboard, add these environment variables:

```env
# Required
NEXTAUTH_SECRET=MvyWkLOs0f4GIpQfqOXUU6kVkxYnogf3v/39xAWflHU=
NEXTAUTH_URL=https://your-domain.vercel.app

# Sanity
NEXT_PUBLIC_SANITY_PROJECT_ID=your-sanity-project-id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_STUDIO_TOKEN=your-sanity-token

# Somali Payment
SOMALI_PAYMENT_ENABLED=true
SOMALI_PAYMENT_WEBHOOK_SECRET=your-somali-webhook-secret

# OAuth (if using)
GITHUB_CLIENT_ID=your-github-client-id
GITHUB_CLIENT_SECRET=your-github-client-secret
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
```

---

## 🎯 Step 5: Post-Deployment Setup

### 5.1 Update OAuth Callback URLs

After deployment, update your OAuth callback URLs:

**GitHub:**
- Go to GitHub OAuth app settings
- Update callback URL to: `https://your-domain.vercel.app/api/auth/callback/github`

**Google:**
- Go to Google Cloud Console
- Update redirect URI to: `https://your-domain.vercel.app/api/auth/callback/google`

### 5.2 Test All Features

1. **User Registration/Login**
   - Test email/password registration
   - Test OAuth login (if configured)

2. **Room Booking**
   - Browse available rooms
   - Test booking process
   - Verify Somali payment integration

3. **Payment System**
   - Test all payment methods
   - Verify payment instructions
   - Check fee calculations

4. **Admin Dashboard**
   - Access admin panel
   - Manage bookings
   - View analytics

### 5.3 Configure Custom Domain (Optional)

1. In Vercel dashboard, go to Settings > Domains
2. Add your custom domain
3. Update DNS records as instructed
4. Update OAuth callback URLs with new domain

---

## 🎯 Step 6: Somali Payment Customization

### 6.1 Update Business Information

Edit `src/libs/somali-payment.ts`:

```typescript
// Replace with your actual business numbers
evc: {
  name: 'EVC Plus',
  phoneNumber: '252-61-YOUR-ACTUAL-NUMBER',
  instructions: 'Send payment to: 252-61-YOUR-ACTUAL-NUMBER\nReference: {reference}',
  // ... other settings
},
premier_bank: {
  name: 'Premier Bank',
  accountNumber: 'YOUR-ACTUAL-ACCOUNT-NUMBER',
  instructions: 'Bank Transfer to:\nAccount: YOUR-ACTUAL-ACCOUNT-NUMBER\nReference: {reference}',
  // ... other settings
}
```

### 6.2 Configure Webhook (Optional)

For payment confirmations, set up webhooks:

1. Generate a webhook secret:
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
```

2. Add to environment variables:
```env
SOMALI_PAYMENT_WEBHOOK_SECRET=your-generated-secret
```

3. Configure webhook endpoint at: `https://your-domain.vercel.app/api/somali-payment/webhook`

---

## 🎯 Step 7: Monitoring & Maintenance

### 7.1 Set Up Monitoring

1. **Vercel Analytics**: Enable in dashboard
2. **Error Tracking**: Monitor error logs
3. **Uptime Monitoring**: Set up alerts

### 7.2 Regular Maintenance

1. **Update Dependencies**: Monthly
2. **Backup Sanity Data**: Weekly
3. **Monitor Payment Transactions**: Daily
4. **Update Payment Numbers**: As needed

---

## 🚨 Troubleshooting

### Common Issues:

1. **Payment API Not Working**
   - Check environment variables
   - Verify phone numbers are correct
   - Test with authentication

2. **OAuth Login Failing**
   - Verify callback URLs
   - Check client IDs and secrets
   - Ensure domain matches

3. **Sanity CMS Issues**
   - Verify project ID and token
   - Check dataset name
   - Test API connectivity

4. **Build Failures**
   - Check TypeScript errors
   - Verify all imports
   - Test locally first

---

## ✅ Deployment Checklist

- [ ] Environment variables configured
- [ ] Somali payment numbers updated
- [ ] Sanity CMS set up and connected
- [ ] OAuth providers configured (optional)
- [ ] Deployed to Vercel
- [ ] Custom domain configured (optional)
- [ ] All features tested
- [ ] Monitoring set up
- [ ] Documentation updated

---

## 🎉 Success!

Your hotel management system with Somali payment integration is now deployed and ready for use!

**Live URL**: `https://your-domain.vercel.app`

**Admin Panel**: `https://your-domain.vercel.app/studio`

**Support**: Check the documentation in the project for detailed guides. 