import React from "react";

const ContactUs = () => {
  return (
  <div className='p-5'>
    Contact Us! 

    <input type = "text" placeholder="First Name:"/>
    <input type = "text" placeholder="Last Name:"/>
    <textarea name="Message" cols ="40" rows="5" placeholder="Message"></textarea>
  </div>
  );
};

export default ContactUs;
