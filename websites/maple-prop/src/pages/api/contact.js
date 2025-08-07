export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { name, email, phone, address, message } = req.body;

    // Basic validation
    if (!name || !email || !message) {
      return res.status(400).json({ message: 'Name, email, and message are required' });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: 'Please provide a valid email address' });
    }

    // Here you would typically:
    // 1. Send an email notification
    // 2. Store the contact form data in a database
    // 3. Send a confirmation email to the user
    
    // For now, we'll just log the data and return success
    console.log('Contact form submission:', {
      name,
      email,
      phone,
      address,
      message,
      timestamp: new Date().toISOString()
    });

    // Simulate processing time
    setTimeout(() => {
      res.status(200).json({ 
        message: 'Thank you for your message! We will get back to you soon.',
        success: true 
      });
    }, 1000);

  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({ 
      message: 'Something went wrong. Please try again later.',
      success: false 
    });
  }
} 