#!/bin/bash

# KTL Textile Website - Hostinger Deployment Script
# This script prepares the website for deployment to Hostinger

echo "🚀 KTL Textile Website - Hostinger Deployment Preparation"
echo "=================================================="

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${GREEN}✅ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

print_error() {
    echo -e "${RED}❌ $1${NC}"
}

print_info() {
    echo -e "${BLUE}ℹ️  $1${NC}"
}

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    print_error "Please run this script from the project root directory"
    exit 1
fi

print_info "Starting deployment preparation..."

# Step 1: Install dependencies
print_info "Installing dependencies..."
npm run install:all
if [ $? -eq 0 ]; then
    print_status "Dependencies installed successfully"
else
    print_error "Failed to install dependencies"
    exit 1
fi

# Step 2: Build the project
print_info "Building the project for production..."
npm run build
if [ $? -eq 0 ]; then
    print_status "Project built successfully"
else
    print_error "Build failed"
    exit 1
fi

# Step 3: Check if dist directory exists
if [ -d "project/dist" ]; then
    print_status "Build directory found: project/dist/"
    
    # List build contents
    echo ""
    print_info "Build contents:"
    ls -la project/dist/
    
    # Check for essential files
    if [ -f "project/dist/index.html" ]; then
        print_status "index.html found"
    else
        print_error "index.html not found in build"
        exit 1
    fi
    
    if [ -d "project/dist/assets" ]; then
        print_status "assets directory found"
        echo "Assets:"
        ls -la project/dist/assets/
    else
        print_error "assets directory not found in build"
        exit 1
    fi
    
    # Check file sizes
    echo ""
    print_info "Build size analysis:"
    du -sh project/dist/
    du -sh project/dist/assets/
    
else
    print_error "Build directory not found"
    exit 1
fi

# Step 4: Create deployment package
print_info "Creating deployment package..."
mkdir -p hostinger-deploy
cp -r project/dist/* hostinger-deploy/
cp project/public/.htaccess hostinger-deploy/ 2>/dev/null || print_warning ".htaccess not found (will be created on server)"

print_status "Deployment package created in: hostinger-deploy/"

# Step 5: Display deployment instructions
echo ""
echo "🎯 DEPLOYMENT INSTRUCTIONS FOR HOSTINGER"
echo "========================================"
echo ""
echo "1. 📁 Upload all files from 'hostinger-deploy/' to your 'public_html/' directory"
echo "2. 🌐 Ensure ktlbd.com domain points to your Hostinger account"
echo "3. 🔒 Enable SSL certificate in Hostinger control panel"
echo "4. ✅ Test the website at https://ktlbd.com"
echo ""
echo "📋 Files to upload:"
echo "   - index.html (root of public_html/)"
echo "   - assets/ folder (with all CSS, JS, images, videos)"
echo "   - .htaccess file (for SPA routing and optimization)"
echo ""
echo "🔧 FTP/SFTP Details:"
echo "   - Host: Your Hostinger FTP host"
echo "   - Username: Your FTP username"
echo "   - Password: Your FTP password"
echo "   - Upload to: public_html/ directory"
echo ""

# Step 6: Final verification
print_info "Performing final verification..."

# Check if all essential files are in deployment package
if [ -f "hostinger-deploy/index.html" ] && [ -d "hostinger-deploy/assets" ]; then
    print_status "✅ Deployment package is ready!"
    print_status "✅ All essential files present"
    print_status "✅ Website ready for upload to Hostinger"
    
    echo ""
    echo "🚀 NEXT STEPS:"
    echo "1. Open your FTP client (FileZilla, etc.)"
    echo "2. Connect to your Hostinger account"
    echo "3. Upload all files from 'hostinger-deploy/' to 'public_html/'"
    echo "4. Visit https://ktlbd.com to verify deployment"
    echo ""
    echo "📞 Need help? Check HOSTINGER_DEPLOYMENT.md for detailed instructions"
    echo "🚀 Your website is now ready for ktlbd.com deployment!"
    
else
    print_error "Deployment package verification failed"
    exit 1
fi

print_status "Deployment preparation completed successfully! 🎉"
