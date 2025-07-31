# 🔗 Frontend-Backend Connection Setup Guide

## **Current Status**
✅ **Frontend**: Next.js app with Sanity integration ready  
✅ **Backend**: Sanity CMS configuration prepared  
✅ **Dependencies**: All required packages installed  
❌ **Environment Variables**: Need to be configured  
❌ **Sanity Project**: Need to be created and configured  

---

## **Step 1: Create Sanity Backend**

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

## **Step 2: Configure Environment Variables**

### **2.1 Create .env.local File**
Create a file named `.env.local` in your project root with:

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
- Replace `your-secret-key-here` with a secure random string (you can generate one at https://generate-secret.vercel.app/32)

---

## **Step 3: Test the Connection**

### **3.1 Run the Test Script**
```bash
node test-connection.js
```

This will verify:
- ✅ Environment variables are set
- ✅ Sanity connection works
- ✅ Data can be fetched from backend

### **3.2 Start Development Server**
```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your app running with backend data.

---

## **Step 4: Verify Backend Integration**

### **4.1 Check API Functions**
Your app already has these backend-connected functions in `src/libs/apis.ts`:

- ✅ `getRooms()` - Fetch all hotel rooms
- ✅ `getRoom(slug)` - Get specific room details
- ✅ `createBooking()` - Create new bookings
- ✅ `getUserBookings()` - Get user's bookings
- ✅ `createReview()` - Add reviews
- ✅ `getRoomReviews()` - Get room reviews

### **4.2 Test Features**
1. **Hotel Listings**: Should load from Sanity
2. **Room Details**: Should display room information
3. **Booking System**: Should create bookings in Sanity
4. **Reviews**: Should save and display reviews
5. **User Authentication**: Should work with NextAuth

---

## **Step 5: Production Deployment**

### **5.1 Deploy to Vercel**
1. Push your code to GitHub
2. Connect to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

### **5.2 Environment Variables for Production**
In Vercel dashboard, add the same environment variables but update:
- `NEXTAUTH_URL=https://your-app-name.vercel.app`

---

## **🔧 Troubleshooting**

### **Common Issues:**

#### **"Sanity CMS is not configured"**
**Solution**: Check your `.env.local` file and ensure all variables are set correctly.

#### **"Cannot connect to Sanity"**
**Solution**: 
1. Verify your Project ID is correct
2. Check your Token has proper permissions
3. Ensure dataset name is `production`

#### **"Data not loading"**
**Solution**:
1. Check if you have data in your Sanity Studio
2. Verify your queries in `src/libs/sanityQueries.ts`
3. Test with the connection script

#### **"Authentication not working"**
**Solution**:
1. Set a proper `NEXTAUTH_SECRET`
2. Configure OAuth providers if using social login
3. Check `NEXTAUTH_URL` is correct

---

## **📊 Monitoring**

### **Local Development**
- Check browser console for errors
- Use `node test-connection.js` to verify connection
- Monitor network tab for API calls

### **Production**
- Check Vercel function logs
- Monitor Sanity API usage
- Use Vercel analytics

---

## **✅ Success Checklist**

- [ ] Sanity project created
- [ ] Environment variables configured
- [ ] Local development works
- [ ] Data loads from backend
- [ ] Booking system functional
- [ ] Reviews system working
- [ ] Authentication configured
- [ ] Production deployment ready

---

## **🚀 Your App is Now Connected!**

**Frontend**: Next.js app with modern UI  
**Backend**: Sanity CMS with real-time data  
**Connection**: Fully functional API integration  

Your hotel management app now has a complete frontend-backend connection! 