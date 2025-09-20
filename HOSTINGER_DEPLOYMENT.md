# 🚀 Hostinger Deployment Guide - ktlbd.com

## 📋 Prerequisites
- Hostinger hosting account with ktlbd.com domain
- FTP/SFTP access to your hosting account
- Node.js 20+ installed locally
- FileZilla or similar FTP client

## 🔧 Build Configuration for Hostinger

### 1. Build the Production Version
```bash
# From the project root directory
npm run build
```

This creates the production build in `project/dist/` directory.

### 2. Upload Files to Hostinger

#### Upload Directory Structure
```
public_html/                    # Your main hosting directory
├── index.html                  # Main HTML file
├── assets/                     # All static assets
│   ├── index-[hash].css       # Compiled CSS
│   ├── index-[hash].js        # Compiled JavaScript
│   ├── hero.mp4               # Hero video
│   ├── hero.jpg               # Hero fallback image
│   └── textile-icon.svg       # Logo
└── _redirects                 # SPA routing support
```

## 📁 Step-by-Step Upload Process

### Step 1: Prepare Files
1. **Build the project**: `npm run build`
2. **Navigate to**: `project/dist/` directory
3. **Select all files** in the dist folder

### Step 2: Upload to Hostinger
1. **Connect to FTP/SFTP**:
   - Host: Your Hostinger FTP host
   - Username: Your FTP username
   - Password: Your FTP password
   - Port: 21 (FTP) or 22 (SFTP)

2. **Upload to public_html**:
   - Upload all files from `project/dist/` to `public_html/`
   - Ensure `index.html` is in the root of `public_html/`
   - Upload the entire `assets/` folder

### Step 3: Configure Domain Settings
1. **Point Domain**: Ensure ktlbd.com points to your hosting account
2. **SSL Certificate**: Enable SSL in Hostinger control panel
3. **DNS Settings**: Verify DNS propagation

## ⚙️ Hostinger-Specific Configuration

### .htaccess File (Create if needed)
Create a `.htaccess` file in your `public_html/` directory:

```apache
# Enable compression
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/plain
    AddOutputFilterByType DEFLATE text/html
    AddOutputFilterByType DEFLATE text/xml
    AddOutputFilterByType DEFLATE text/css
    AddOutputFilterByType DEFLATE application/xml
    AddOutputFilterByType DEFLATE application/xhtml+xml
    AddOutputFilterByType DEFLATE application/rss+xml
    AddOutputFilterByType DEFLATE application/javascript
    AddOutputFilterByType DEFLATE application/x-javascript
</IfModule>

# Cache static assets
<IfModule mod_expires.c>
    ExpiresActive On
    ExpiresByType text/css "access plus 1 year"
    ExpiresByType application/javascript "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType image/jpg "access plus 1 year"
    ExpiresByType image/jpeg "access plus 1 year"
    ExpiresByType image/gif "access plus 1 year"
    ExpiresByType image/svg+xml "access plus 1 year"
    ExpiresByType video/mp4 "access plus 1 year"
</IfModule>

# SPA Routing Support
<IfModule mod_rewrite.c>
    RewriteEngine On
    RewriteBase /
    
    # Handle Angular and React Router
    RewriteRule ^index\.html$ - [L]
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteRule . /index.html [L]
</IfModule>

# Security headers
<IfModule mod_headers.c>
    Header always set X-Frame-Options "SAMEORIGIN"
    Header always set X-Content-Type-Options "nosniff"
    Header always set Referrer-Policy "strict-origin-when-cross-origin"
</IfModule>
```

## 🔍 Post-Deployment Checklist

### 1. Test Website Functionality
- [ ] Homepage loads correctly
- [ ] All navigation links work
- [ ] Hero video plays
- [ ] Images load properly
- [ ] Mobile responsiveness
- [ ] Contact form (if applicable)

### 2. Performance Testing
- [ ] Page load speed
- [ ] Image optimization
- [ ] Video loading
- [ ] Mobile performance

### 3. SEO Verification
- [ ] Meta tags present
- [ ] Page titles correct
- [ ] Alt text for images
- [ ] Structured data (if needed)

## 🛠️ Troubleshooting

### Common Issues

#### 1. 404 Errors on Page Refresh
**Problem**: Direct URL access returns 404
**Solution**: Ensure `.htaccess` file is uploaded with SPA routing rules

#### 2. Assets Not Loading
**Problem**: CSS/JS/images not loading
**Solution**: 
- Check file paths in `assets/` folder
- Verify file permissions (644 for files, 755 for folders)
- Clear browser cache

#### 3. Video Not Playing
**Problem**: Hero video doesn't load
**Solution**:
- Check video file size (should be optimized)
- Verify video format (MP4 recommended)
- Check file permissions

#### 4. Slow Loading
**Problem**: Website loads slowly
**Solution**:
- Enable Gzip compression in `.htaccess`
- Optimize images before upload
- Use CDN if available

### File Permissions
Ensure correct permissions on Hostinger:
- **Files**: 644
- **Folders**: 755
- **Executable files**: 755

## 📊 Performance Optimization

### Before Upload
1. **Optimize Images**: Compress hero.jpg and other images
2. **Video Optimization**: Ensure hero.mp4 is compressed
3. **Build Verification**: Test build locally first

### After Upload
1. **Enable Compression**: Use .htaccess rules
2. **Browser Caching**: Set appropriate cache headers
3. **CDN**: Consider using Hostinger's CDN service

## 🔄 Updates and Maintenance

### Making Updates
1. **Local Changes**: Make changes to source code
2. **Rebuild**: Run `npm run build`
3. **Upload**: Replace files in `public_html/`
4. **Test**: Verify changes on live site

### Regular Maintenance
- Monitor website performance
- Update dependencies regularly
- Backup website files
- Check for broken links

## 📞 Support

### Hostinger Support
- **Documentation**: https://support.hostinger.com
- **Live Chat**: Available in Hostinger control panel
- **Ticket System**: Submit support tickets

### Technical Issues
- Check Hostinger server logs
- Verify domain DNS settings
- Test with different browsers
- Clear browser cache

---

## 🎯 Quick Deployment Commands

```bash
# 1. Build the project
npm run build

# 2. Navigate to build directory
cd project/dist

# 3. Upload all files to public_html/ via FTP
# Use FileZilla or your preferred FTP client

# 4. Test the website
# Visit https://ktlbd.com
```

**Your KTL Textile website will be live at https://ktlbd.com after successful upload!**

---

*Built with React, TypeScript, and Vite for optimal performance and modern web standards.*
