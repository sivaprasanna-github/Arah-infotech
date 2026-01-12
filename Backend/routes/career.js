import express from 'express';
import Application from '../models/Application.js';

const router = express.Router();

router.post('/apply', async (req, res) => {
    try {
        const newApplication = new Application(req.body);
        await newApplication.save();
        res.status(201).json({ success: true, message: "Application submitted successfully!" });
    } catch (error) {
        console.error("Application Error:", error);
        res.status(500).json({ success: false, error: "Server Error: Could not save application." });
    }
});

export default router;