import React from "react";
import logo from "../../images/Logo.jpg";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="navbar Navbar">
      <div className="navbar-start">
        <img className="image-size normal-case text-xl" src={logo}></img>
      </div>
      <div className="navbar-end lg:hidden">
        <div className="dropdown dropdown-end w-50">
          <label
            tabIndex={0}
            className="btn btn-ghost lg:hidden bg-white hover:bg-yellow-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-black"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="navbar-menu menu-compact dropdown-content mt-5 px-5 py-2 shadow bg-gray-700 rounded-box w-48"
          >
            <li className="navbar-menu-small">
              <a href="#">Items</a>
            </li>
            <li className="navbar-menu-small">
              <a href="#">Menu</a>
            </li>
            <li className="navbar-menu-small">
              <a href="#">Order</a>
            </li>
            <li className="navbar-menu-small">
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-end hidden lg:visible lg:flex">
        <ul className=" menu-horizontal p-0">
          <li className="navbar-menu-large">
            <a href="#">Items</a>
          </li>
          <li className="navbar-menu-large">
            <a href="#">Menu</a>
          </li>
          <li className="navbar-menu-large">
            <a href="#">Order</a>
          </li>
          <li className="navbar-menu-large">
            <a href="#">Contact Us</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
