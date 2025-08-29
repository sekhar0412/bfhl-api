# 🚀 Deployment Guide: GitHub + Vercel

This guide will help you deploy your BFHL API to GitHub and then to Vercel for free hosting.

## 📁 Project Structure
```
bfhl-api/
├── server.js          # Main API server
├── package.json       # Dependencies and scripts
├── vercel.json        # Vercel configuration
├── .gitignore         # Git ignore file
├── README.md          # Project documentation
└── DEPLOYMENT.md      # This file
```

## 🔧 Step 1: Deploy to GitHub

### 1.1 Initialize Git Repository
```bash
git init
git add .
git commit -m "Initial commit: BFHL API"
```

### 1.2 Create GitHub Repository
1. Go to [GitHub.com](https://github.com)
2. Click "New repository"
3. Name it: `bfhl-api` (or your preferred name)
4. Make it **Public** (required for free Vercel deployment)
5. Don't initialize with README (we already have one)
6. Click "Create repository"

### 1.3 Push to GitHub
```bash
git remote add origin https://github.com/YOUR_USERNAME/bfhl-api.git
git branch -M main
git push -u origin main
```

## 🌐 Step 2: Deploy to Vercel

### 2.1 Install Vercel CLI (Optional)
```bash
npm install -g vercel
```

### 2.2 Deploy via Vercel Dashboard (Recommended)

1. **Go to [Vercel.com](https://vercel.com)**
2. **Sign up/Login** with your GitHub account
3. **Click "New Project"**
4. **Import your GitHub repository** (`bfhl-api`)
5. **Configure project**:
   - Framework Preset: `Node.js`
   - Root Directory: `./` (default)
   - Build Command: `npm run build`
   - Output Directory: `./` (default)
   - Install Command: `npm install`
6. **Click "Deploy"**

### 2.3 Deploy via Vercel CLI (Alternative)
```bash
vercel
# Follow the prompts to connect to GitHub and deploy
```

## ✅ What Happens After Deployment

### GitHub
- Your code is version controlled
- Easy collaboration and updates
- Public repository for portfolio

### Vercel
- **Free hosting** with HTTPS
- **Auto-deployment** on every Git push
- **Global CDN** for fast response times
- **Custom domain** support (optional)

## 🔄 Automatic Updates

After initial deployment, every time you push to GitHub:
1. Vercel automatically detects changes
2. Builds and deploys your updated API
3. Your API stays up-to-date

## 📍 Your Deployed API URLs

- **Vercel**: `https://your-project-name.vercel.app`
- **GitHub**: `https://github.com/YOUR_USERNAME/bfhl-api`

## 🧪 Test Your Deployed API

### Test the root endpoint:
```
GET https://your-project-name.vercel.app/
```

### Test the BFHL endpoint:
```
POST https://your-project-name.vercel.app/bfhl
Content-Type: application/json

{
  "data": ["A", "1", "B", "2", "C", "3", "@", "#"]
}
```

## 🛠️ Troubleshooting

### Common Issues:
1. **Build fails**: Check if all dependencies are in `package.json`
2. **API not working**: Verify `vercel.json` configuration
3. **Environment variables**: Add them in Vercel dashboard if needed

### Vercel Dashboard:
- Go to your project dashboard
- Check "Functions" tab for serverless function logs
- Check "Deployments" for build status

## 🎯 Next Steps

1. **Customize your API** with your actual user details
2. **Add more endpoints** if needed
3. **Set up monitoring** and analytics
4. **Add custom domain** (optional)

## 📞 Support

- **Vercel Docs**: [vercel.com/docs](https://vercel.com/docs)
- **GitHub Docs**: [docs.github.com](https://docs.github.com)
- **Express.js Docs**: [expressjs.com](https://expressjs.com)

---

**Happy Deploying! 🚀**
