# ✅ Deployment Checklist

## 🎯 Pre-Deployment

- [ ] **Environment Setup**
  - [ ] Node.js 18+ installed
  - [ ] Git repository initialized
  - [ ] `.env.local` file created with secure NEXTAUTH_SECRET
  - [ ] Somali payment phone numbers updated in `src/libs/somali-payment.ts`

- [ ] **Sanity CMS**
  - [ ] Sanity account created
  - [ ] New project created
  - [ ] API token generated
  - [ ] Project ID and token added to environment variables

- [ ] **OAuth Setup (Optional)**
  - [ ] GitHub OAuth app created
  - [ ] Google OAuth app created
  - [ ] Client IDs and secrets added to environment variables

## 🚀 Deployment

- [ ] **Code Preparation**
  - [ ] All changes committed to Git
  - [ ] Code pushed to GitHub repository
  - [ ] No TypeScript errors
  - [ ] Build successful locally (`npm run build`)

- [ ] **Vercel Deployment**
  - [ ] Vercel account created
  - [ ] Repository connected to Vercel
  - [ ] Environment variables configured in Vercel dashboard
  - [ ] Domain configured (optional)

## 🔧 Post-Deployment

- [ ] **Environment Variables**
  - [ ] NEXTAUTH_URL updated to production domain
  - [ ] OAuth callback URLs updated to production domain
  - [ ] All environment variables verified

- [ ] **Testing**
  - [ ] User registration/login works
  - [ ] Room booking functionality works
  - [ ] Somali payment system works
  - [ ] Admin dashboard accessible
  - [ ] Sanity Studio accessible at `/studio`

- [ ] **Customization**
  - [ ] Somali payment phone numbers updated with real business numbers
  - [ ] Bank account numbers updated
  - [ ] Payment instructions customized
  - [ ] Fee structure adjusted if needed

## 📊 Monitoring

- [ ] **Analytics**
  - [ ] Vercel Analytics enabled
  - [ ] Error tracking configured
  - [ ] Uptime monitoring set up

- [ ] **Security**
  - [ ] HTTPS enabled
  - [ ] Environment variables secured
  - [ ] API endpoints protected

## 🎉 Final Steps

- [ ] **Documentation**
  - [ ] Update README with live URL
  - [ ] Document any custom configurations
  - [ ] Create user guide if needed

- [ ] **Backup**
  - [ ] Sanity data backed up
  - [ ] Environment variables documented
  - [ ] Deployment configuration saved

---

## 🚨 Troubleshooting Checklist

If something goes wrong:

- [ ] Check environment variables in hosting platform
- [ ] Verify OAuth callback URLs
- [ ] Test API endpoints manually
- [ ] Check build logs for errors
- [ ] Verify Sanity connection
- [ ] Test payment system with authentication

---

## 📞 Support

- **Documentation**: Check `DEPLOYMENT_STEPS.md` for detailed instructions
- **Somali Payment**: See `SOMALI_PAYMENT_GUIDE.md`
- **Setup**: Refer to `SETUP_GUIDE.md`
- **Issues**: Check error logs in hosting platform dashboard

---

**🎉 Congratulations! Your hotel management system is now live with Somali payment integration!** 