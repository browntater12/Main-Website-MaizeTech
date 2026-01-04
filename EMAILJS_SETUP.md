# EmailJS Setup Guide

This guide will help you set up EmailJS to send emails from your contact form directly to `5157828321@vtext.com` without needing a backend server.

## Step 1: Sign Up for EmailJS

1. Go to https://www.emailjs.com/
2. Click **Sign Up** (free account available)
3. Create your account

## Step 2: Create an Email Service

1. Once logged in, go to **Email Services** in the dashboard
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
   - For Gmail: You'll need to connect your Gmail account
   - For other providers: Follow their specific setup instructions
4. After connecting, note your **Service ID** (you'll need this later)

## Step 3: Create an Email Template

1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Set up your template with these variables:
   - `{{to_email}}` - Will be set to `5157828321@vtext.com`
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{subject}}` - Email subject
   - `{{message}}` - Email message/content
   - `{{reply_to}}` - Reply-to email (sender's email)

4. **Template Example:**
   ```
   Subject: {{subject}}
   
   From: {{from_name}} ({{from_email}})
   
   Message:
   {{message}}
   
   ---
   Reply to: {{reply_to}}
   ```

5. In the **To Email** field, enter: `5157828321@vtext.com`
   - Or use `{{to_email}}` if you want to make it configurable

6. Save the template and note your **Template ID**

## Step 4: Get Your Public Key

1. Go to **Account** → **General** in the dashboard
2. Find your **Public Key** (also called API Key)
3. Copy it (you'll need this)

## Step 5: Configure Environment Variables

Create a `.env.local` file in the root of your project (or add to existing `.env`):

```env
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

Replace:
- `your_service_id_here` with your Service ID from Step 2
- `your_template_id_here` with your Template ID from Step 3
- `your_public_key_here` with your Public Key from Step 4

## Step 6: Restart Your Dev Server

After adding the environment variables, restart your development server:

```bash
npm run dev
```

## Step 7: Test the Form

1. Fill out the contact form on your website
2. Submit it
3. Check `5157828321@vtext.com` (or your phone if it's a Verizon SMS gateway) for the message

## For Production (GitHub Pages)

When deploying to GitHub Pages, you'll need to set these as GitHub Secrets:

1. Go to your repository → **Settings** → **Secrets and variables** → **Actions**
2. Add these secrets:
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`

3. Update `.github/workflows/deploy.yml` to include these in the build step:

```yaml
- name: Build
  run: npm run build
  env:
    GITHUB_PAGES: true
    GITHUB_REPOSITORY_NAME: ${{ github.event.repository.name }}
    VITE_EMAILJS_SERVICE_ID: ${{ secrets.VITE_EMAILJS_SERVICE_ID }}
    VITE_EMAILJS_TEMPLATE_ID: ${{ secrets.VITE_EMAILJS_TEMPLATE_ID }}
    VITE_EMAILJS_PUBLIC_KEY: ${{ secrets.VITE_EMAILJS_PUBLIC_KEY }}
```

## Troubleshooting

### "Gmail_API: Invalid grant. Please reconnect your Gmail account"

This error means your Gmail connection has expired or been revoked. To fix it:

1. Go to your EmailJS dashboard: https://dashboard.emailjs.com/
2. Navigate to **Email Services**
3. Find your Gmail service and click on it
4. Click **Reconnect** or **Disconnect and Reconnect**
5. Follow the Google OAuth flow to reconnect your Gmail account
6. Make sure to grant all necessary permissions
7. Once reconnected, try sending a test email again

**Alternative**: If reconnecting doesn't work:
- Delete the existing Gmail service
- Create a new Gmail service
- Reconnect your Gmail account
- Update your Service ID in `.env.local`

### Other Common Issues

- **"EmailJS is not configured"**: Make sure all three environment variables are set
- **Email not received**: 
  - Check your EmailJS dashboard for error logs
  - Verify the service is connected properly
  - Check that `5157828321@vtext.com` is correct
  - Make sure your Gmail account has permission to send emails
- **Free tier limits**: EmailJS free tier has limits (200 emails/month). Consider upgrading if needed
- **Gmail security**: If you have 2FA enabled, you may need to use an App Password instead of OAuth

## Notes

- The email will be sent to `5157828321@vtext.com` (Verizon SMS gateway)
- All form data (name, email, subject, message) will be included in the email
- No backend server is required - everything runs client-side!

