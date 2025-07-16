// /api/server.js

const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const { CONTACTUS } = require('../constants/constants');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors({
    origin: 'http://localhost:3000', // React dev server URL
    methods: ['POST', 'GET'],
    credentials: true
}));
app.use(express.json());

// Email Route
app.post('/api/contact', async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    try {
        // Set up transporter
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: CONTACTUS.EMAIL,
                pass: CONTACTUS.PASSWORD
            }
        });

        // Mail options
        const mailOptions = {
            from: `"${name}" <${email}>`,
            to: CONTACTUS.EMAIL,
            subject: `New Contact Message from ${name}`,
            text: `
You have received a new message from your contact form.

Name: ${name}
Email: ${email}

Message:
${message}
`
        };

        // Send mail
        await transporter.sendMail(mailOptions);

        res.status(200).json({ success: true, message: 'Email sent successfully' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ error: 'Email sending failed' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
