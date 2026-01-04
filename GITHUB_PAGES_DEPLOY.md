# GitHub Pages Deployment Guide

This guide will help you deploy your MaizeTech website to GitHub Pages.

## Prerequisites

1. A GitHub account
2. Your code pushed to a GitHub repository

## Setup Steps

### 1. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions** (not "Deploy from a branch")
4. Save the settings

### 2. Push Your Code

If you haven't already, push your code to GitHub:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

### 3. Automatic Deployment

Once you push to the `main` branch, GitHub Actions will automatically:
- Build your site
- Deploy it to GitHub Pages

You can monitor the deployment in the **Actions** tab of your repository.

### 4. Your Site URL

After deployment, your site will be available at:
- **Project page**: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`
- **User/Organization page**: `https://YOUR_USERNAME.github.io/` (if repo name is `YOUR_USERNAME.github.io`)

## Contact Form

The contact form uses a `mailto:` link to open the user's email client with pre-filled information. This is a client-side solution that works without any backend server.

## Troubleshooting

### Build Fails

- Check the **Actions** tab for error messages
- Ensure all dependencies are in `package.json`
- Verify Node.js version compatibility

### Routes Don't Work

- GitHub Pages doesn't support client-side routing by default
- Add a `404.html` file that redirects to `index.html` (Vite should handle this)
- Or configure your repository to use a custom 404 page


## Manual Deployment (Alternative)

If you prefer to deploy manually:

```bash
# Build the site
npm run build

# The dist/ folder contains your static files
# You can push the dist/ folder to the gh-pages branch
```

But using GitHub Actions (automatic) is recommended!

