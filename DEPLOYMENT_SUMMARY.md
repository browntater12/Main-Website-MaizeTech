# GitHub Pages Deployment - Quick Start

## ✅ What's Been Set Up

1. **GitHub Actions Workflow** (`.github/workflows/deploy.yml`)
   - Automatically builds and deploys on every push to `main`
   - Handles GitHub Pages base path automatically

2. **Vite Configuration** (`vite.config.ts`)
   - Automatically detects GitHub Pages and sets correct base path
   - Works for both project pages and user/organization pages

3. **404.html** (`public/404.html`)
   - Handles client-side routing for React Router
   - Redirects 404s to your React app

4. **App Router Updates** (`src/App.tsx`)
   - Handles GitHub Pages redirect format

## 🚀 Deployment Steps

### 1. Push to GitHub

```bash
git add .
git commit -m "Setup GitHub Pages deployment"
git push origin main
```

### 2. Enable GitHub Pages

1. Go to your repository on GitHub
2. **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions** (NOT "Deploy from a branch")
4. Save

### 3. Wait for Deployment

- Go to the **Actions** tab
- Watch the workflow run
- When it completes, your site will be live!

### 4. Your Site URL

- **Project page**: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`
- **User page**: `https://YOUR_USERNAME.github.io/` (if repo is `username.github.io`)

## 📧 Contact Form

The contact form uses a `mailto:` link that opens the user's email client with pre-filled information. No backend server is required!

## 🔧 Manual Build (Optional)

If you want to test the build locally:

```bash
npm run build
# Check the dist/ folder
```

## 📝 Notes

- The workflow uses Node.js 20
- Builds automatically on every push to `main`
- The base path is automatically configured based on your repo name
- Client-side routing works via the 404.html redirect

## 🐛 Troubleshooting

**Build fails?**
- Check the Actions tab for errors
- Ensure all dependencies are in `package.json`

**Routes don't work?**
- Make sure 404.html is in the `public/` folder
- Verify GitHub Pages is set to use "GitHub Actions" as source


