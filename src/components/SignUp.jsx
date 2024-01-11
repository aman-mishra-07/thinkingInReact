import React, { useEffect, useState } from "react";
import validation from "./validation";
import { FaReact } from "react-icons/fa";

const SignUp = () => {
  const [user, setUser] = useState({});

  const handleInputChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    setUser({
      ...user,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.entries(user).length === 0) return;
    const validateResult = validation(user)
    console.log(validateResult);
  };
  return (
    <>
      <div className="w-full min-h-screen primary-bg p-4 md:p-10 flex items-center justify-center">
        <div className="w-full max-w-4xl flex flex-col shadow-2xl shadow-black md:flex-row rounded-2xl bg-gradient-to-tr from-sky-400 via-zinc-200 to-sky-400 backdrop-blur bg-opacity-70 overflow-hidden">
          <div className="flex-1 flex items-center justify-center p-4  ">
            <span className="flex sm:flex-col items-center gap-2 text-blue-600">
              <FaReact className="animate-spin-slow " size={300} />
              <span className="font-semibold text-3xl md:text-5xl">
                Learn React Js
              </span>
            </span>
          </div>
          <div className="flex-1 px-6 py-2 sm:p-8 flex flex-col space-y-4">
            <h2 className="text-center font-semibold text-lg sm:text-3xl text-blue-900">
              Sign Up to Learn React Js
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-0 sm:grid grid-cols-2  gap-y-4 gap-x-8">
              <div>
                <label htmlFor="firstName" className="block font-semibold">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  onChange={handleInputChange}
                  placeholder="your first name"
                  className="px-2 py-1 sm:p-2 shadow shadow-gray-500 rounded outline-none w-full"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block font-semibold  ">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  onChange={handleInputChange}
                  placeholder="your last name"
                  className="px-2 py-1 sm:p-2 shadow shadow-gray-500 rounded outline-none w-full"
                />
              </div>
              <div>
                <label htmlFor="dob" className="block font-semibold  ">
                  Date of birth
                </label>
                <input
                  type="date"
                  name="dob"
                  onChange={handleInputChange}
                  className="px-2 py-1 sm:p-2 shadow shadow-gray-500 rounded outline-none w-full"
                />
              </div>
              <div>
                <label htmlFor="email" className="block font-semibold  ">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  onChange={handleInputChange}
                  placeholder="your email"
                  className="px-2 py-1 sm:p-2 shadow shadow-gray-500 rounded outline-none w-full"
                />
              </div>
              <div>
                <label htmlFor="gender" className="block font-semibold  ">
                  Gender
                </label>
                <select
                  name="gender"
                  onChange={handleInputChange}
                  className="px-2 py-1 sm:p-2 shadow shadow-gray-500 rounded outline-none w-full"
                >
                  <option value="null">Select Your Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="transgender">transgender</option>
                  <option value="other">other</option>
                </select>
              </div>
              <div>
                <label htmlFor="phone" className="block font-semibold  ">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  onChange={handleInputChange}
                  placeholder="your phone number"
                  className="px-2 py-1 sm:p-2 shadow shadow-gray-500 rounded outline-none w-full"
                />
              </div>
              <div>
                <label htmlFor="password" className="block font-semibold  ">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  onChange={handleInputChange}
                  placeholder="create your password"
                  className="px-2 py-1 sm:p-2 shadow shadow-gray-500 rounded outline-none w-full"
                />
              </div>
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block font-semibold  "
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  onChange={handleInputChange}
                  placeholder="confirm Password"
                  className="px-2 py-1 sm:p-2 shadow shadow-gray-500 rounded outline-none w-full"
                />
              </div>
              <button className="col-span-2 p-2 shadow shadow-gray-500 rounded outline-none w-full bg-blue-600 hover:bg-blue-500 font-semibold text-white">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
