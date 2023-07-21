import React from "react";

const ContactUs = () => {
  return (
    <div className="p-5 py-20">
      <h2 className="text-2xl font-bold mb-4">Contact Us!</h2>

      <form className="space-y-4">
        <div>
          <label className="block text-gray-700">First Name:</label>
          <input
            type="text"
            placeholder="Enter your first name"
            className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-indigo-500"
          />
        </div>

        <div>
          <label className="block text-gray-700">Last Name:</label>
          <input
            type="text"
            placeholder="Enter your last name"
            className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-indigo-500"
          />
        </div>

        <div>
          <label className="block text-gray-700">Message:</label>
          <textarea
            name="Message"
            cols="40"
            rows="5"
            placeholder="Write your message here"
            className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:border-indigo-500"
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
