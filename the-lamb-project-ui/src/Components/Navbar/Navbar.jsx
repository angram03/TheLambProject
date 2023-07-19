import React from "react";
import { Link } from "react-router-dom";
import AboutPage from "../AboutPage/AboutPage";

const Navbar = () => {
  return (
    <div className="navbar">

      <div className="flex justify-between items-center h-24 max-w-[1240px]mx-auto px-4 text-[#015239]">
        <h1 className="w-full text-3xl font-bold text-[#015239]">
          <Link to="/">LAMB.</Link>
        </h1>

        <ul className="flex">
          <li className="p-4">
            <Link to="/about">About</Link>
          </li>

          <li className="p-4">
            <Link to="/login">Login</Link>
          </li>

          <li className="p-4">
            <Link to="/register">Register</Link>
          </li>





        </ul>

      </div>
    </div>
  );
};

export default Navbar;
