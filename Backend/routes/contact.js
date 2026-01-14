import express from 'express';
import Message from '../models/Message.js'; 

const router = express.Router();

// --- 1. POST: Save a new message (Used by Contact.js) ---
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

// --- 2. GET: Fetch all messages (Used by ContactMessages.js Admin) ---
router.get('/contact', async (req, res) => {
    try {
        // Find all messages and sort by date (newest first)
        const messages = await Message.find().sort({ date: -1 });
        res.status(200).json({ success: true, data: messages });
    } catch (error) {
        console.error("Fetch Error:", error);
        res.status(500).json({ success: false, error: "Server Error: Could not fetch messages." });
    }
});

export default router;