import React, { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

const Wildlife = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const ebook = (event) => {
    event.preventDefault();

    const { name, email, password } = form;

    axios
      .post("https://toursite-server.onrender.com/book", {
        name,
        email,
        password,
      })
      .then((res) => {
        console.log(res);
        navigate("/login");
      })
      .catch((err) => console.log(err));
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <Navbar prop="" />
      <main className="flex flex-row px-5 py-3 m-8 gap-10 border-b rounded-xl shadow-xl">
        <div className="flex flex-col gap-y-8">
          <img src="doars.webp" alt="" className="w-[90%] rounded-xl" />
          <h1 className="text-orange-600 text-6xl">Wildlife</h1>
        </div>
        <div className="border rounded-xl p-5 mb-24">
          <h1 className="text-4xl text-orange-600">Book Now</h1>
          <form className="" method="POST" onSubmit={ebook}>
            <div>
              <label htmlFor="name" className="">
                Name
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="name"
                  autoComplete="name"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div>
              <label htmlFor="email">Email address</label>
              <div className="">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password">Password</label>
              </div>
              <div className="">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <button type="submit">Sign up</button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Wildlife;
