# 🚀 Quick Deployment Reference - ktlbd.com

## ⚡ One-Command Deployment Preparation
```bash
./deploy-hostinger.sh
```

## 📁 What Gets Created
- `hostinger-deploy/` - Ready-to-upload files
- `HOSTINGER_DEPLOYMENT.md` - Detailed instructions
- `.htaccess` - Server configuration

## 🎯 Upload Checklist

### Files to Upload to `public_html/`:
- ✅ `index.html` (main page)
- ✅ `assets/` folder (CSS, JS, images, videos)
- ✅ `.htaccess` (SPA routing + optimization)

### Total Size: ~2.0MB
- CSS: 19.58 kB (gzipped: 4.19 kB)
- JavaScript: 247.73 kB (gzipped: 72.08 kB)
- Images: ~1.5MB (optimized)
- Video: 148 kB (compressed)

## 🔧 Hostinger Setup

### 1. FTP Connection
- **Host**: Your Hostinger FTP host
- **Username**: Your FTP username  
- **Password**: Your FTP password
- **Directory**: `public_html/`

### 2. Domain Configuration
- Point `ktlbd.com` to Hostinger
- Enable SSL certificate
- Verify DNS propagation

### 3. Upload Process
1. Connect via FTP client (FileZilla)
2. Navigate to `public_html/`
3. Upload all files from `hostinger-deploy/`
4. Set permissions: 644 for files, 755 for folders

## ✅ Post-Upload Verification

### Test These URLs:
- `https://ktlbd.com` (homepage)
- `https://ktlbd.com/about` (navigation)
- `https://ktlbd.com/products` (routing)
- `https://ktlbd.com/contact` (all pages)

### Check These Features:
- ✅ Hero video plays
- ✅ Navigation works
- ✅ Mobile responsive
- ✅ Images load
- ✅ CSS styling applied

## 🛠️ Troubleshooting

### Common Issues:
1. **404 on page refresh** → Check `.htaccess` is uploaded
2. **Assets not loading** → Verify `assets/` folder permissions
3. **Video not playing** → Check file size and format
4. **Slow loading** → Enable compression in Hostinger

### Quick Fixes:
```bash
# Rebuild if needed
npm run build

# Check build contents
ls -la project/dist/

# Verify deployment package
ls -la hostinger-deploy/
```

## 📞 Support Resources
- **Hostinger Help**: https://support.hostinger.com
- **Detailed Guide**: `HOSTINGER_DEPLOYMENT.md`
- **Deployment Script**: `./deploy-hostinger.sh`

---

**🎉 Your KTL Textile website will be live at https://ktlbd.com!**
