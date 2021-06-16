import React, { useState } from "react";
import EmailConfig from '../Utils/EmailConfig.js';
import {convertCartToEmail} from '../Utils/CartUtils.js';
import './Contact.css';


const PLACEHOLDER_MESSAGE = "Contact me to order, discuss custom requests, or talk about anything! Please include your address if you would like to place an order.";
const EMAIL_FAILED_ALERT = "Sorry, we could not send your message! Please email trudysgallery@gmail.com instead.";
// Reference https://sheelahb.com/blog/how-to-send-email-from-react-without-a-backend/
// https://www.geeksforgeeks.org/how-to-handle-multiple-input-field-in-react-form-with-a-single-function/

function Contact(props) {
  const currentCart = props.currentCart;
  const [isCartIncluded,setIsCartIncluded] =useState(true);
  const [feedback, setFeedback] = useState({
    feedbackName: '',
    feedbackEmail: '',
    feedbackMessage: '',
    feedbackCart: {}
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
    console.log(error);
    alert(EMAIL_FAILED_ALERT);
   });
};
 
const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFeedback({
      ...feedback,
      [name]: value,
    });
};

const handleCartCheckboxChange = (e) => {
  setIsCartIncluded(prevCheckState => !prevCheckState);
  let cartValToSendInEmail = e.currentTarget.checked ? convertCartToEmail(currentCart):{};
  setFeedback({
      ...feedback,
      feedbackCart: cartValToSendInEmail
    });
}

  if (formSubmitted && formSubmitSuccessful) {
    return <h2>Thank You! I will reach out to you shortly!.</h2>;
  }
  return (
    <div className="contact-page">
      <h1 className="contact-page-welcome-text">Let's make art together!</h1>
      <form onSubmit={handleSubmit} className="contact-page-form">
        <div>
          <label htmlFor="name">Name:</label>
          <input onChange={handleFormChange} value={feedback.feedbackName} name="feedbackName" type="text" id="name" maxLength="75" required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input onChange={handleFormChange} value={feedback.feedbackEmail} name="feedbackEmail" type="email" id="email" maxLength="75" required />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea onChange={handleFormChange} value={feedback.feedbackMessage} name="feedbackMessage" id="message" placeholder={PLACEHOLDER_MESSAGE} rows="5" cols="50" required />
        </div>
        <div className="contact-page-include-cart-checkbox">
          <label htmlFor="cardCheckbox">Include current cart in message?</label>
          <input checked={isCartIncluded} onChange={handleCartCheckboxChange} type="checkbox" id="cardCheckbox" name="Include cart?" value={feedback.feedbackCart} />
        </div>
        <div className="contact-page-submit-section">
          <button className="contact-page-submit-button" type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Contact;