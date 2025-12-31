import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Email configuration
const smtpHost = process.env.SMTP_HOST || 'smtp.gmail.com';
const smtpPort = process.env.SMTP_PORT || 587;
const smtpUser = process.env.SMTP_USER;
const smtpPassword = process.env.SMTP_PASSWORD;
const recipientEmail = process.env.RECIPIENT_EMAIL || '5157828321@vtext.com';

// Create email transporter
let transporter = null;
if (smtpUser && smtpPassword) {
  transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort == 465, // true for 465, false for other ports
    auth: {
      user: smtpUser,
      pass: smtpPassword,
    },
  });
} else {
  console.warn('Warning: SMTP credentials not set. Email functionality will not work.');
  console.warn('Set SMTP_USER and SMTP_PASSWORD environment variables.');
}

// SMS/Email endpoint (sends to Verizon SMS email gateway)
app.post('/api/send-sms', async (req, res) => {
  try {
    const { name, email, subject, information } = req.body;

    // Validate required fields
    if (!name || !email || !subject || !information) {
      return res.status(400).json({ 
        success: false, 
        error: 'All fields are required' 
      });
    }

    if (!transporter) {
      return res.status(500).json({ 
        success: false, 
        error: 'Email service is not configured. Please set SMTP_USER and SMTP_PASSWORD environment variables.' 
      });
    }

    // Format the message (keep it short for SMS)
    const message = `New Contact Form\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage: ${information}`;

    // Send email to Verizon SMS gateway (will be delivered as SMS)
    const mailOptions = {
      from: smtpUser,
      to: recipientEmail,
      subject: `Contact: ${subject}`,
      text: message,
    };

    const info = await transporter.sendMail(mailOptions);

    console.log('Message sent successfully:', info.messageId);

    res.json({ 
      success: true, 
      message: 'Message sent successfully',
      messageId: info.messageId 
    });
  } catch (error) {
    console.error('Error sending message:', error);
    res.status(500).json({ 
      success: false, 
      error: error.message || 'Failed to send message' 
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    service: 'SMS Email Gateway API',
    recipient: recipientEmail,
    configured: transporter !== null
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Health check: http://localhost:${PORT}/api/health`);
});

