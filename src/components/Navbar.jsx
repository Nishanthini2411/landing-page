import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-4 px-8 flex justify-between items-center">
      <h1 className="text-xl font-bold text-purple-600">K.Nishanthini</h1>
      <div className="space-x-4">
        <Link to="/" className="text-gray-700 hover:text-purple-600">Home</Link>{" "}{" "}
        <Link to="/projects" className="text-gray-700 hover:text-purple-600">Projects</Link>{" "}
        <Link to="/skills" className="text-gray-700 hover:text-purple-600">Skills</Link>{" "}
        <Link to="/education" className="text-gray-700 hover:text-purple-600">Education</Link>{" "}
        <Link to="/contact" className="text-gray-700 hover:text-purple-600">Contact</Link>{" "}
      </div>
    </nav>
  );
};

export default Navbar;