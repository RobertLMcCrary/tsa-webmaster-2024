import React from "react";
import './PageStyles/Contact.css';

function Contact() {
  return (
    <div className="wrapper">
      <h1>We would love to hear your feedback!</h1>
      <form className="contact-form">
      <label>Name</label>
        <input
          type="text"
          className="input-text-field"
          placeholder="First and Last Name..."
        />
        
        <label>Email Address</label>
        <input
          type="email"
          className="input-text-field"
          placeholder="YourEmailAddress@gmail.com"
        />
        
        <label>Phone Number</label>
        <input type="number" className="input-text-field" />

        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  )
}

export default Contact;
