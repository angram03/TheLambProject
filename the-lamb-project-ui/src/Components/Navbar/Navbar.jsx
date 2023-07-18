import React from "react";


const Navbar = () => {
  return (
    <div className="navbar">

    <div className='flex justify-between items-center h-24 max-w-[1240px]mx-auto px-4 text-[#015239]'>
      
      

      <h1 className='w-full text-3xl font-bold text-[#015239]'>LAMB.</h1>

      <ul className='flex'>
        <li className="p-4">About</li>
        <li className="p-4">Login</li>
        <li className="p-4">Register</li>
      </ul>


      </div>
    </div>
  );
};

export default Navbar;
