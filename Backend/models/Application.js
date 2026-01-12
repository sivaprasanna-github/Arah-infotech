import mongoose from 'mongoose';

const ApplicationSchema = new mongoose.Schema({
    jobTitle: { type: String, required: true }, // Which job they applied for
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    mobile: { type: String, required: true },
    address: { type: String, required: true },
    
    // Education
    graduation: { type: String, required: true },
    higherSecondary: { type: String, required: true }, // 12th/Diploma
    secondary: { type: String, required: true }, // 10th
    
    // Professional
    experience: { type: String, required: true },
    noticePeriod: { type: String, required: true },
    linkedin: { type: String },
    github: { type: String },
    
    date: { type: Date, default: Date.now }
});

export default mongoose.model('Application', ApplicationSchema);