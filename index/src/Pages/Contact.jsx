import React, { useState } from "react";
import "./Contact.css";
import Icons from '../Components/Icons.jsx'

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 👉 Temporary (until backend/email added)
    alert("Message feature coming soon! Please contact via email.");

    // Reset form
    setForm({
      name: "",
      email: "",
      message: ""
    });
  };

  return (
    <div className="contact-section">

      <h2>Contact <span>Me</span></h2>


      <p className="contact-text">
        Feel free to reach out for opportunities or collaborations.
      </p>


      <div className="contact-links">
        <div className="iconsplace">
          <Icons />
        </div>

      </div>

      <div className="contact">

        <div className="form-container">

          <form onSubmit={handleSubmit}>

            <div className="input-group">
              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
              />
              <label>Your Name</label>
            </div>

            <div className="input-group">
              <input
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
              />
              <label>Your Email</label>
            </div>

            <div className="input-group">
              <textarea
                name="message"
                required
                value={form.message}
                onChange={handleChange}
              ></textarea>
              <label>Your Message</label>
            </div>

            <button type="submit">Send Message</button>

          </form>

        </div>

      </div>


      {/* <div className="iconsget">
        <h3>Get In Touch</h3>

      </div> */}

    </div>
  );
};

export default Contact;