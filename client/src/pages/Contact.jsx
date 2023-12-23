// Contact.js
import React from "react";
import Navbar from "../components/Navbar";

const Contact = () => {
  return (
    <div>
    <Navbar prop=""/>
      <div className="container mx-auto p-8 max-w-md">
        <h1 className="text-4xl font-bold mb-4">Contact Information</h1>
        <div className="bg-white p-6 rounded-md shadow-lg border-b border-gray-300">
          <p className="text-xl mb-2">Atmajo Chowdhury</p>
          <p className="text-lg mb-4">Tour Site India</p>
          <p className="text-lg mb-4">Kolkata, WB</p>
          <p className="text-lg mb-4">India</p>
          <p className="text-lg mb-4">+91 12345 67890</p>
          <p className="text-lg">toursite@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
