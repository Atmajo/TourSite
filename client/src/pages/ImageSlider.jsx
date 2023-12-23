// ImageSlider.js
import React, { useState, useEffect } from "react";
import "./ImageSlider.css"; // You can create this CSS file for styling

const images = [
  "kedarnath.webp",
  "tajmahal.webp",
  "sikkim.webp",
  "adi-kailash.webp"
];

const names = ["KEDARNATH", "TAJ MAHAL", "  SIKKIM", "KAILASH"];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Move to the next image
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change slide every 3 seconds (adjust as needed)

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, []); // Empty dependency array means this effect runs once after the initial render

  return (
    <div className="image-slider">
      <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="h-[700px] rounded-xl" />
      <h3 className="relative top-[-50px] left-[140px] text-4xl text-white font-extrabold">
        {names[currentIndex]}
      </h3>
    </div>
  );
};

export default ImageSlider;
