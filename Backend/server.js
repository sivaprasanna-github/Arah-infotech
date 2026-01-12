import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import contactRoutes from './routes/contact.js';
import careerRoutes from './routes/career.js'; 

dotenv.config();

const app = express();

// --- CORS CONFIGURATION ---
// This list defines who is allowed to talk to your backend
const allowedOrigins = [
    "https://prasanna-arah-infotech.netlify.app", // Your Live Frontend
    "https://arah-infotech.onrender.com",        // Your Live Backend (Self)
    "http://localhost:3000" ,
    "http://localhost:5000"                       // Your Local Computer (for testing)
];

app.use(cors({
    origin: function (origin, callback) {
        // allow requests with no origin (like mobile apps or curl requests)
        if (!origin) return callback(null, true);
        
        if (allowedOrigins.indexOf(origin) === -1) {
            const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
            return callback(new Error(msg), false);
        }
        return callback(null, true);
    },
    credentials: true, // Allows cookies/headers if needed
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
// --------------------------

app.use(express.json());

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

connectDB();

app.use('/api', contactRoutes);
app.use('/api/career', careerRoutes); 

app.get('/', (req, res) => {
    res.send("Arah Infotech Backend is Running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
