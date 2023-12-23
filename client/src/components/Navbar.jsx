import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ prop }) => {
  return (
    <header className="flex flex-row justify-between items-center px-5 py-3 m-8 border rounded-xl shadow-xl">
      <div className="logo text-3xl">TS</div>
      <div className="flex items-center flex-row gap-8">
        <ul className="flex flex-row gap-8">
          <li className="list-none">
            <Link to="/">
              Home
            </Link>
          </li>
          <li className="list-none">
            <Link to="/about">
              About
            </Link>
          </li>
          <li className="list-none">
            <Link to="/contact">
              Contact
            </Link>
          </li>
        </ul>
        {prop != "" ? (
          <div className="border-2 rounded-xl p-2 hover:bg-orange-300">
            <li className="list-none">
              <Link to={`/${prop}`}>
                {prop.charAt(0).toUpperCase() + prop.substr(1).toLowerCase()}
              </Link>
            </li>
          </div>
        ) : (
          ""
        )}
      </div>
    </header>
  );
};

export default Navbar;
