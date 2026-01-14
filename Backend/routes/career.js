import express from 'express';
import Application from '../models/Application.js';

const router = express.Router();

// 1. POST: Submit a new Application
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

// 2. GET: Fetch all Applications (Added this)
router.get('/', async (req, res) => {
    try {
        // Sort by date descending (newest first)
        const applications = await Application.find().sort({ date: -1 });
        res.status(200).json({ success: true, data: applications });
    } catch (error) {
        console.error("Fetch Error:", error);
        res.status(500).json({ success: false, error: "Server Error: Could not fetch applications." });
    }
});

export default router;