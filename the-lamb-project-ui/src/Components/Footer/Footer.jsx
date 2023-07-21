import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#015239] text-white">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h1 className="text-2xl font-bold mb-4">LAMB.</h1>
            <p className="text-sm">Your travel advisor.</p>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-4">Quick Links</h2>
            <ul className="text-sm">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-4">Follow Us</h2>
           
           
            <div className="flex space-x-4">
              <a href="http://instagram.com" target="_blank">
                <img
                  src="/images/instagram.png"
                  alt="Instagram"
                  className="w-10 h-10"
                />
              </a>

              <a href="http://twitter.com" target="_blank">
                <img
                  src="/images/twitter.png"
                  alt="Twitter"
                  className="w-10 h-10"
                />
              </a>
              <a href="http://linkedin.com" target="_blank">
                <img
                  src="/images/linkedin.png"
                  alt="LinkedIn"
                  className="w-10 h-10"
                />
              </a>
              <a
                href="https://www.flaticon.com/free-icons/twitter"
                title="twitter icons"
              >
                Social media icons created by Freepik - Flaticon
              </a>
              <a
                href="https://www.pexels.com/video/skyscrapers-in-new-york-11422401/"
                title="city video"
              >
                {" "}
                City Video by Djordje Vanjek
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-900 py-4 text-center">
        <p className="text-sm text-gray-300">
          © {new Date().getFullYear()} LAMB. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
