import React from "react";
import { useState } from "react";


const ContactUs = () => {
  const [contactFormInfo, setContactFormInfo] = useState({
    name: '',
    email: '',
    message: '',
  });
   const { name, email, message } = contactFormInfo
  const handleChange = (e) => {
    // e.preventDefault();
    setContactFormInfo((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  
  const handleSubmit = async e => {
    e.preventDefault()
    try {
      await fetch("https://v1.nocodeapi.com/angelica2003/google_sheets/xyZOrwBUKCoFROYR?tabId=Sheet1", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify([[name, email, message, new Date().toLocaleString()]])
      })
      alert("Message sent!")
      setContactFormInfo({ name: '', email: '', message: '' })
    }  
    catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="p-5 py-20">
      <h2 className="text-2xl font-bold mb-4">Contact Us!</h2>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block text-gray-700">Name:</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your first name"
            className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-indigo-500"
            value={contactFormInfo.name}
            onChange={handleChange}
            autoComplete="off"
            
          />
        </div>
          <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-indigo-500"
            value={contactFormInfo.email}
            onChange={handleChange}
            autoComplete="off"
        />
        </div>

        <div>
          <label className="block text-gray-700">Message:</label>
          <textarea
            name="message"
            type="text"
            placeholder="Write your message here"
            className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-indigo-500"
            value={contactFormInfo.message}
            onChange={handleChange}
            autoComplete="off"
          />
        </div>

        <button 
          className="block bg-[#044389] text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700"
          type="submit"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
