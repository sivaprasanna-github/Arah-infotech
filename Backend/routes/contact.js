import express from 'express';
import Message from '../models/Message.js'; // Note the .js extension

const router = express.Router();

// Route: POST /api/contact
router.post('/contact', async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;

        const newMessage = new Message({ 
            name, 
            email, 
            subject, 
            message 
        });

        await newMessage.save();

        res.status(201).json({ success: true, message: "Message sent successfully!" });
    } catch (error) {
        console.error("Save Error:", error);
        res.status(500).json({ success: false, error: "Server Error: Could not save message." });
    }
});

export default router;