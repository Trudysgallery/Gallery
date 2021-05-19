import React, { useState } from "react";
import './Contact.css'

const Contact = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };
  return (
    <div className="ContactPage">
      <h1 className="makeArt">Let's make art together!</h1>
      <form onSubmit={handleSubmit} className="contactForm">
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" maxLength="75" required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" maxLength="75" required />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea id="message" placeholder="Make requests as detailed as possible, including size and color preferences!" rows="5" cols="50" required />
        </div>
        <button type="submit">{status}</button>
      </form>
    </div>
  );
};

export default Contact;