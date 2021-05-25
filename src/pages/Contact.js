import React, { useState } from "react";
import './Contact.css';
import EmailConfig from '../Utils/EmailConfig.js';

// Reference https://sheelahb.com/blog/how-to-send-email-from-react-without-a-backend/
// https://www.geeksforgeeks.org/how-to-handle-multiple-input-field-in-react-form-with-a-single-function/

function Contact() {
  const [feedback, setFeedback] = useState({
    feedbackName: '',
    feedbackEmail: '',
    feedbackMessage: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formSubmitSuccessful, setFormSubmitSuccessful] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    sendFeedback(EmailConfig.templateID,feedback);
    setFormSubmitted(true);
  };

  //Using EmailJS Default service
const sendFeedback = (templateID,feedback) => {
  window.emailjs.send(
      "default_service",
      templateID,
      feedback
    ).then(function(response) {
      setFormSubmitSuccessful(true);
   }, function(error) {
    alert("Sorry, we could not send your message! Please email trudysgallery@gmail.com instead.");
   });
};
 
const handleChange = (e) => {
    const { name, value } = e.target;
    setFeedback({
      ...feedback,
      [name]: value,
    });
};

  if (formSubmitted && formSubmitSuccessful) {
    return <h2>Thank You! I will reach out to you shortly!.</h2>;
  }
  return (
    <div className="ContactPage">
      <h1 className="makeArt">Let's make art together!</h1>
      <form onSubmit={handleSubmit} className="contactForm">
        <div>
          <label htmlFor="name">Name:</label>
          <input onChange={handleChange} value={feedback.feedbackName} name="feedbackName" type="text" id="name" maxLength="75" required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input onChange={handleChange} value={feedback.feedbackEmail} name="feedbackEmail" type="email" id="email" maxLength="75" required />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea onChange={handleChange} value={feedback.feedbackMessage} name="feedbackMessage" id="message" placeholder="Make requests as detailed as possible, including size and color preferences!" rows="5" cols="50" required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;