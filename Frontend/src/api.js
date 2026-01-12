const BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/api";

/**
 * 1. Send Contact Form Data
 */
export const sendContactMessage = async (formData) => {
  try {
    const response = await fetch(`${BASE_URL}/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Server Error");
    }

    return data;
  } catch (error) {
    throw error;
  }
};

/**
 * 2. Send Job Application Data
 */
export const applyForJob = async (applicationData) => {
  try {
    const response = await fetch(`${BASE_URL}/career/apply`, {
      method: "POST",
      headers: { 
        "Content-Type": "application/json" 
      },
      body: JSON.stringify(applicationData),
    });
    
    const data = await response.json();
    
    if (!response.ok) {
        throw new Error(data.error || "Server Error");
    }
    
    return data;
  } catch (error) {
    throw error;
  }
};