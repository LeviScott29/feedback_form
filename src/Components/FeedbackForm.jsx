import React, { useState } from 'react';
import './FeedbackForm.css'; // Import CSS for styling
const FeedbackForm = () => {
    const [formData, setFormData] =useState({
        name: '',
        email: '',
        feedback:''
    });

  return (
    <>
    <nav>
    Tell Us What You Think
    </nav>
      <form className="feedback-form">
        <h2>We'd Love to Hear From You!</h2>
        <p>Please share your feedback with us.</p>
        
        <input 
        type = "text"
        name ="name"
        placeholder= "Your Name"
        />
        <input
        Type ="email"
        name="email"
        placeholder = "your email"
        />
        <textarea
        name="feedback"
        placeholder= "Your Feedback"
        > </textarea>
        <button type="submit">Submit Feedback</button>
      </form>
    </>
  );
};

export default FeedbackForm;
