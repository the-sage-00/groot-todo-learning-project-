@echo off
chcp 65001 >nul

echo 🌱 Groot Todo - Build and Deploy Script
echo ========================================

REM Check if Node.js is installed
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Node.js is not installed. Please install Node.js first.
    pause
    exit /b 1
)

REM Check if npm is installed
npm --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ npm is not installed. Please install npm first.
    pause
    exit /b 1
)

echo ✅ Node.js and npm are installed

REM Install dependencies
echo 📦 Installing dependencies...
npm install

if %errorlevel% neq 0 (
    echo ❌ Failed to install dependencies
    pause
    exit /b 1
)

echo ✅ Dependencies installed successfully

REM Build the project
echo 🔨 Building the project...
npm run build

if %errorlevel% neq 0 (
    echo ❌ Build failed
    pause
    exit /b 1
)

echo ✅ Build completed successfully!

REM Check if build folder exists
if not exist "build" (
    echo ❌ Build folder not found
    pause
    exit /b 1
)

echo 📁 Build folder created: build\

REM Display deployment options
echo.
echo 🚀 Deployment Options:
echo 1. Deploy to Netlify (Drag ^& Drop)
echo 2. Deploy to Vercel
echo 3. Deploy to GitHub Pages
echo 4. Just build (no deployment)
echo.

set /p choice="Choose an option (1-4): "

if "%choice%"=="1" (
    echo 🌐 Deploying to Netlify...
    echo 📋 Instructions:
    echo 1. Go to https://netlify.com
    echo 2. Sign up/Login with your GitHub account
    echo 3. Drag and drop the 'build' folder to the Netlify dashboard
    echo 4. Your site will be live instantly!
    echo.
    echo ✅ Build folder is ready for Netlify deployment!
) else if "%choice%"=="2" (
    echo ⚡ Deploying to Vercel...
    vercel --version >nul 2>&1
    if %errorlevel% neq 0 (
        echo 📦 Installing Vercel CLI...
        npm install -g vercel
    )
    vercel
) else if "%choice%"=="3" (
    echo 📄 Deploying to GitHub Pages...
    echo 📋 Instructions:
    echo 1. Add 'homepage' to package.json
    echo 2. Install gh-pages: npm install --save-dev gh-pages
    echo 3. Add deploy scripts to package.json
    echo 4. Run: npm run deploy
    echo.
    echo ✅ Build folder is ready for GitHub Pages deployment!
) else if "%choice%"=="4" (
    echo ✅ Build completed! Ready for manual deployment.
) else (
    echo ❌ Invalid option
    pause
    exit /b 1
)

echo.
echo 🎉 Process completed successfully!
echo 📁 Your build folder is located at: %cd%\build
echo.
echo 🔗 Don't forget to:
echo - Test your deployed app
echo - Share it on LinkedIn
echo - Add it to your portfolio
echo.
echo Built with ❤️ by Rishi Kataria

pause 