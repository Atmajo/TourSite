import React from "react";
import { Link } from 'react-router-dom';
import ImageSlider from "../pages/ImageSlider";
import Navbar from "./Navbar";
import '../index.css';

const Home = () => {
  return (
    <div className="select-none">
      <Navbar prop="logout"/>
      <main className="flex flex-row px-5 py-3 m-8 gap-10 border-b rounded-xl shadow-xl">
        <ImageSlider />
        <div className="flex flex-col">
          <div className=" py-10">
            <span className="holiday text-6xl text-orange-600">Holiday?</span>
          </div>
          <div className="pb-5">
            <p className="text-5xl">Let's plan a perfect</p>
          </div>
          <div className="text-6xl font-extrabold text-orange-600 pb-8">
            Tour
          </div>
          <div className="flex flex-row items-center pt-5 gap-20">
            <div className="w-full border-b shadow-lg p-5 rounded-xl hover:border hover:shadow-xl">
              <img src="wildlife.webp" alt="" className="rounded-lg" />
              <h1 className="text-xl font-extrabold text-orange-600 pt-3">
                Wildlife
              </h1>
              <li className="list-none mt-4">
                <Link to='/wildlife' className="border-2 list-none rounded-xl p-2 mt-2 hover:bg-orange-300">Book Now</Link>
              </li>
            </div>
            <div className="w-full border-b shadow-lg p-5 rounded-xl hover:border hover:shadow-xl">
              <img src="trekking.webp" alt="" className="rounded-lg" />
              <h1 className="text-xl font-extrabold text-orange-600 pt-3">
                Trekking
              </h1>
              <li className="list-none mt-4">
                <Link to='/trekking' className="border-2 list-none rounded-xl p-2 mt-2 hover:bg-orange-300">Book Now</Link>
              </li>
            </div>
            <div className="w-full border-b shadow-lg p-5 rounded-xl hover:border hover:shadow-xl">
              <img src="heritage.webp" alt="" className="rounded-lg" />
              <h1 className="text-xl font-extrabold text-orange-600 pt-3">
                Heritage
              </h1>
              <li className="list-none mt-4">
                <Link to='/heritage' className="border-2 list-none rounded-xl p-2 mt-2 hover:bg-orange-300">Book Now</Link>
              </li>
            </div>
          </div>
        </div>
      </main>
      <footer className="flex justify-center items-center">
        copyright © 2024
      </footer>
    </div>
  );
};

export default Home;
