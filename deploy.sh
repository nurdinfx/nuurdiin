#!/bin/bash

echo "🚀 Hotel Management System - Deployment Script"
echo "=============================================="
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    exit 1
fi

echo "✅ Node.js version: $(node --version)"

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm first."
    exit 1
fi

echo "✅ npm version: $(npm --version)"

# Install dependencies
echo ""
echo "📦 Installing dependencies..."
npm install

# Check if .env.local exists
if [ ! -f ".env.local" ]; then
    echo ""
    echo "📝 Creating .env.local file..."
    cat > .env.local << EOF
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
EOF
    echo "✅ .env.local file created"
else
    echo "✅ .env.local file already exists"
fi

# Build the project
echo ""
echo "🔨 Building the project..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful"
else
    echo "❌ Build failed. Please check the errors above."
    exit 1
fi

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo ""
    echo "📦 Installing Vercel CLI..."
    npm install -g vercel
fi

echo ""
echo "🎯 Deployment Options:"
echo "1. Deploy to Vercel (recommended)"
echo "2. Deploy to Netlify"
echo "3. Manual deployment"
echo ""

read -p "Choose deployment option (1-3): " choice

case $choice in
    1)
        echo ""
        echo "🚀 Deploying to Vercel..."
        echo "Please follow the prompts to complete deployment."
        vercel --prod
        ;;
    2)
        echo ""
        echo "🚀 Deploying to Netlify..."
        echo "Please install Netlify CLI and run: netlify deploy --prod"
        ;;
    3)
        echo ""
        echo "📋 Manual Deployment Steps:"
        echo "1. Push your code to GitHub"
        echo "2. Connect your repository to Vercel/Netlify"
        echo "3. Configure environment variables in the dashboard"
        echo "4. Deploy"
        ;;
    *)
        echo "❌ Invalid option"
        exit 1
        ;;
esac

echo ""
echo "🎉 Deployment completed!"
echo ""
echo "📋 Next Steps:"
echo "1. Configure environment variables in your hosting platform"
echo "2. Set up Sanity CMS (see DEPLOYMENT_STEPS.md)"
echo "3. Update Somali payment phone numbers in src/libs/somali-payment.ts"
echo "4. Test all features"
echo "5. Configure custom domain (optional)"
echo ""
echo "📚 Documentation:"
echo "- DEPLOYMENT_STEPS.md - Complete deployment guide"
echo "- SOMALI_PAYMENT_GUIDE.md - Somali payment system guide"
echo "- SETUP_GUIDE.md - Setup instructions" 