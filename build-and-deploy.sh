#!/bin/bash

# Groot Todo - Build and Deploy Script
# Created by Rishi Kataria

echo "🌱 Groot Todo - Build and Deploy Script"
echo "========================================"

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm first."
    exit 1
fi

echo "✅ Node.js and npm are installed"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ Failed to install dependencies"
    exit 1
fi

echo "✅ Dependencies installed successfully"

# Build the project
echo "🔨 Building the project..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed"
    exit 1
fi

echo "✅ Build completed successfully!"

# Check if build folder exists
if [ ! -d "build" ]; then
    echo "❌ Build folder not found"
    exit 1
fi

echo "📁 Build folder created: build/"

# Display deployment options
echo ""
echo "🚀 Deployment Options:"
echo "1. Deploy to Netlify (Drag & Drop)"
echo "2. Deploy to Vercel"
echo "3. Deploy to GitHub Pages"
echo "4. Just build (no deployment)"
echo ""

read -p "Choose an option (1-4): " choice

case $choice in
    1)
        echo "🌐 Deploying to Netlify..."
        echo "📋 Instructions:"
        echo "1. Go to https://netlify.com"
        echo "2. Sign up/Login with your GitHub account"
        echo "3. Drag and drop the 'build' folder to the Netlify dashboard"
        echo "4. Your site will be live instantly!"
        echo ""
        echo "✅ Build folder is ready for Netlify deployment!"
        ;;
    2)
        echo "⚡ Deploying to Vercel..."
        if ! command -v vercel &> /dev/null; then
            echo "📦 Installing Vercel CLI..."
            npm install -g vercel
        fi
        vercel
        ;;
    3)
        echo "📄 Deploying to GitHub Pages..."
        echo "📋 Instructions:"
        echo "1. Add 'homepage' to package.json"
        echo "2. Install gh-pages: npm install --save-dev gh-pages"
        echo "3. Add deploy scripts to package.json"
        echo "4. Run: npm run deploy"
        echo ""
        echo "✅ Build folder is ready for GitHub Pages deployment!"
        ;;
    4)
        echo "✅ Build completed! Ready for manual deployment."
        ;;
    *)
        echo "❌ Invalid option"
        exit 1
        ;;
esac

echo ""
echo "🎉 Process completed successfully!"
echo "📁 Your build folder is located at: $(pwd)/build"
echo ""
echo "🔗 Don't forget to:"
echo "- Test your deployed app"
echo "- Share it on LinkedIn"
echo "- Add it to your portfolio"
echo ""
echo "Built with ❤️ by Rishi Kataria" 