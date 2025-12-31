# SMS Email Gateway Server

This is the backend API server for sending SMS messages via email gateway (Verizon vtext.com) when the contact form is submitted.

## Setup Instructions

### 1. Install Dependencies

```bash
cd server
npm install
```

### 2. Configure Email (SMTP) Credentials

The server uses SMTP to send emails to the Verizon SMS email gateway (`5157828321@vtext.com`).

**For Gmail:**
1. Enable 2-Factor Authentication on your Google account
2. Generate an App Password: https://support.google.com/accounts/answer/185833
3. Use your Gmail address and the app password

**For other email providers:**
- Check your email provider's SMTP settings
- Common ports: 587 (TLS) or 465 (SSL)

### 3. Configure Environment Variables

Create a `.env` file in the `server` directory:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password
RECIPIENT_EMAIL=5157828321@vtext.com
PORT=3001
```

**Important:** 
- Never commit your `.env` file to version control
- For Gmail, use an App Password, not your regular password
- The recipient email is already set to `5157828321@vtext.com` (Verizon SMS gateway)

### 4. Run the Server

**Development mode:**
```bash
npm run dev
```

**Production mode:**
```bash
npm start
```

The server will run on `http://localhost:3001` by default.

### 5. Configure Frontend

In your frontend `.env` file (or `.env.local`), add:

```env
VITE_API_URL=http://localhost:3001
```

For production, update this to your deployed server URL.

## API Endpoints

### POST `/api/send-sms`

Sends an SMS message with contact form data.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Inquiry",
  "information": "Message content here"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Message sent successfully",
  "messageId": "<message-id>"
}
```

### GET `/api/health`

Health check endpoint.

**Response:**
```json
{
  "status": "ok",
  "service": "SMS Email Gateway API",
  "recipient": "5157828321@vtext.com",
  "configured": true
}
```

## Deployment

You can deploy this server to:
- Heroku
- Railway
- Render
- AWS Lambda (with modifications)
- Any Node.js hosting service

Make sure to set the environment variables in your hosting platform's dashboard.

## Troubleshooting

- **"Email service is not configured"**: Check that SMTP_USER and SMTP_PASSWORD are set
- **"Failed to send message"**: 
  - Verify your SMTP credentials are correct
  - For Gmail, make sure you're using an App Password, not your regular password
  - Check that 2-Factor Authentication is enabled (required for App Passwords)
  - Verify SMTP_HOST and SMTP_PORT match your email provider
- **Gmail authentication errors**: Make sure "Less secure app access" is enabled OR use an App Password

