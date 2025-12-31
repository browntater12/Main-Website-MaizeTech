# SMS Email Gateway Setup

This guide will help you set up SMS notifications via email gateway for the contact form.

## Quick Start

1. **Set up the backend server:**
   ```bash
   cd server
   npm install
   ```

2. **Create a `.env` file in the `server` directory:**
   ```env
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-email@gmail.com
   SMTP_PASSWORD=your-app-password
   RECIPIENT_EMAIL=5157828321@vtext.com
   PORT=3001
   ```
   
   **For Gmail:** You'll need to generate an App Password:
   - Go to https://support.google.com/accounts/answer/185833
   - Enable 2-Factor Authentication if not already enabled
   - Generate an App Password and use it as SMTP_PASSWORD

3. **Start the server:**
   ```bash
   npm run dev
   ```

4. **Configure the frontend:**
   Create a `.env.local` file in the root directory:
   ```env
   VITE_API_URL=http://localhost:3001
   ```

5. **Restart your frontend dev server** to pick up the new environment variable.

## Getting Email Credentials

**For Gmail:**
1. Enable 2-Factor Authentication on your Google account
2. Go to https://myaccount.google.com/apppasswords
3. Generate an App Password for "Mail"
4. Use your Gmail address as `SMTP_USER` and the App Password as `SMTP_PASSWORD`

**For other email providers:**
- Check your email provider's documentation for SMTP settings
- Common settings:
  - Gmail: smtp.gmail.com:587
  - Outlook: smtp-mail.outlook.com:587
  - Yahoo: smtp.mail.yahoo.com:587

## Testing

1. Start both the backend server and frontend dev server
2. Fill out the contact form and submit
3. You should receive an SMS with the form data

## Production Deployment

When deploying to production:

1. Deploy the server to a hosting service (Heroku, Railway, Render, etc.)
2. Set the environment variables in your hosting platform
3. Update `VITE_API_URL` in your frontend to point to your deployed server URL
4. Rebuild your frontend with the new API URL

## Notes

- The recipient is already configured to `5157828321@vtext.com` (Verizon SMS gateway)
- Messages sent to this email will be delivered as SMS to the phone number
- For Gmail, you must use an App Password, not your regular password
- Never commit `.env` files to version control
- Other carrier SMS gateways:
  - AT&T: `number@txt.att.net`
  - T-Mobile: `number@tmomail.net`
  - Sprint: `number@messaging.sprintpcs.com`

