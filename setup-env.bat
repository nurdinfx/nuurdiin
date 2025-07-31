@echo off
echo 🚀 Setting up Environment Variables for Hotel Management App
echo.

echo 📝 Creating .env.local file...
(
echo # Sanity CMS Configuration
echo NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id-here
echo NEXT_PUBLIC_SANITY_DATASET=production
echo SANITY_STUDIO_TOKEN=your-sanity-token-here
echo.
echo # NextAuth Configuration
echo NEXTAUTH_SECRET=your-secret-key-here
echo NEXTAUTH_URL=http://localhost:3000
echo.
echo # OAuth Providers ^(optional^)
echo GITHUB_CLIENT_ID=your_github_client_id
echo GITHUB_CLIENT_SECRET=your_github_client_secret
echo GOOGLE_CLIENT_ID=your_google_client_id
echo GOOGLE_CLIENT_SECRET=your_google_client_secret
echo.
echo # Somali Payment Configuration
echo SOMALI_PAYMENT_ENABLED=true
echo SOMALI_PAYMENT_WEBHOOK_SECRET=your_somali_webhook_secret
) > .env.local

echo ✅ .env.local file created!
echo.
echo 🔧 Next Steps:
echo 1. Replace 'your-project-id-here' with your Sanity Project ID
echo 2. Replace 'your-sanity-token-here' with your Sanity Token
echo 3. Replace 'your-secret-key-here' with a secure random string
echo 4. Add OAuth credentials if using social login
echo.
echo 📚 For detailed setup instructions, see setup-sanity.md
echo.
pause 