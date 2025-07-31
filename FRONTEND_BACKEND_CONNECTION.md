# 🔗 Frontend-Backend Connection Guide: Vercel + Sanity

## **Overview**
This guide will help you connect your Next.js frontend (deployed on Vercel) with your Sanity CMS backend.

## **📋 Prerequisites**
- ✅ Next.js project ready
- ✅ Sanity project created
- ✅ Vercel account
- ✅ GitHub repository

---

## **Step 1: Set up Sanity Backend**

### **1.1 Create Sanity Project**
1. Go to [https://www.sanity.io/manage](https://www.sanity.io/manage)
2. Sign up/Login with your account
3. Click "Create new project"
4. Name it: `hotel-management`
5. Choose dataset: `production`
6. **Copy your Project ID** (looks like: `abc12345`)

### **1.2 Get Sanity Token**
1. In your Sanity project dashboard
2. Go to "API" section
3. Click "Add API token"
4. Name it: `hotel-management-token`
5. Permissions: `Editor` (read/write)
6. **Copy the token** (starts with `sk...`)

### **1.3 Add Sample Data**
1. Go to your Sanity Studio: `https://your-project-id.sanity.studio/`
2. Add hotel rooms, users, and other data
3. This will be your backend database

---

## **Step 2: Configure Local Environment**

### **2.1 Create Environment File**
Run the setup script:
```bash
# Windows
setup-env.bat

# Or manually create .env.local with:
```

```env
# Sanity CMS Configuration
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id-here
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_STUDIO_TOKEN=your-sanity-token-here

# NextAuth Configuration
NEXTAUTH_SECRET=your-secret-key-here
NEXTAUTH_URL=http://localhost:3000

# OAuth Providers (optional)
GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

### **2.2 Replace Placeholder Values**
- Replace `your-project-id-here` with your actual Sanity Project ID
- Replace `your-sanity-token-here` with your actual Sanity Token
- Replace `your-secret-key-here` with a secure random string

---

## **Step 3: Test Local Connection**

### **3.1 Start Development Server**
```bash
npm run dev
```

### **3.2 Verify Connection**
1. Open [http://localhost:3000](http://localhost:3000)
2. Check if hotel data loads from Sanity
3. Test booking functionality
4. Verify no "Sanity CMS is not configured" errors

---

## **Step 4: Deploy to Vercel**

### **4.1 Push to GitHub**
```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

### **4.2 Deploy on Vercel**
1. Go to [vercel.com](https://vercel.com)
2. Sign up with your GitHub account
3. Click "New Project"
4. Import your repository
5. Vercel will auto-detect Next.js settings
6. **Don't deploy yet** - we need to add environment variables first

### **4.3 Add Environment Variables in Vercel**
In Vercel dashboard, go to your project settings and add:

```env
# Sanity CMS Configuration
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id-here
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_STUDIO_TOKEN=your-sanity-token-here

# NextAuth Configuration
NEXTAUTH_SECRET=your-secret-key-here
NEXTAUTH_URL=https://your-app-name.vercel.app

# OAuth Providers (optional)
GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

**Important:** Replace `your-app-name.vercel.app` with your actual Vercel domain.

### **4.4 Deploy**
Click "Deploy" in Vercel dashboard.

---

## **Step 5: Verify Production Connection**

### **5.1 Test Your Live Site**
1. Visit your Vercel URL: `https://your-app-name.vercel.app`
2. Check if data loads from Sanity
3. Test all features:
   - Hotel room listings
   - Booking functionality
   - User authentication
   - Reviews system

### **5.2 Common Issues & Solutions**

#### **Issue: "Sanity CMS is not configured"**
**Solution:** Check environment variables in Vercel dashboard

#### **Issue: Data not loading**
**Solution:** 
1. Verify Sanity token has correct permissions
2. Check if dataset name is correct
3. Ensure project ID is correct

#### **Issue: Authentication not working**
**Solution:**
1. Update `NEXTAUTH_URL` to your production URL
2. Check OAuth provider settings
3. Verify `NEXTAUTH_SECRET` is set

---

## **Step 6: Continuous Deployment**

### **6.1 Automatic Deployments**
- Every push to `main` branch will trigger a new deployment
- Vercel will automatically rebuild and deploy

### **6.2 Environment Variable Updates**
- Changes to environment variables require a new deployment
- Go to Vercel dashboard → Settings → Environment Variables
- Update values and redeploy

---

## **🔧 Development Workflow**

### **Local Development**
```bash
npm run dev
```
- Uses local `.env.local` file
- Connects to your Sanity backend
- Hot reload for development

### **Production Deployment**
```bash
git add .
git commit -m "Update feature"
git push origin main
```
- Vercel automatically deploys
- Uses production environment variables
- Serves from CDN for fast performance

---

## **📊 Monitoring & Debugging**

### **Vercel Analytics**
- Check Vercel dashboard for deployment status
- Monitor function logs for API errors
- View performance metrics

### **Sanity Studio**
- Access your CMS at: `https://your-project-id.sanity.studio/`
- Monitor content changes
- Check API usage

---

## **✅ Success Checklist**

- [ ] Sanity project created and configured
- [ ] Environment variables set locally
- [ ] Local development works
- [ ] Code pushed to GitHub
- [ ] Vercel project created
- [ ] Environment variables set in Vercel
- [ ] Production deployment successful
- [ ] All features working in production
- [ ] Authentication working
- [ ] Booking system functional

---

## **🚀 Your App is Now Live!**

**Frontend:** `https://your-app-name.vercel.app`
**Backend:** `https://your-project-id.sanity.studio/`

Your Next.js frontend is now connected to your Sanity backend and deployed on Vercel!

---

## **📞 Need Help?**

1. Check Vercel deployment logs
2. Verify Sanity API responses
3. Test environment variables
4. Review this guide step by step

**Common Support Resources:**
- [Vercel Documentation](https://vercel.com/docs)
- [Sanity Documentation](https://www.sanity.io/docs)
- [Next.js Documentation](https://nextjs.org/docs) 