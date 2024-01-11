import React, { useState } from "react";
import { FaReact } from "react-icons/fa";

const Login = ({ loggedIn, setLoggedIn, setLoginPage }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.length < 3 && password.length < 8) {
      return alert("please fill form");
    }
    if (!loggedIn && username.length >= 3 && password.length >= 8) {
      setLoggedIn(true);
      setLoginPage(false);
    }
  };
  return (
    <>
      <div className="w-full min-h-screen  flex items-center justify-center primary-bg">
        <form onSubmit={handleSubmit} className="w-full max-w-xs">
          <div className="p-8 flex flex-col gap-4 shadow-2xl shadow-black rounded-2xl bg-gradient-to-tr from-sky-400 via-zinc-200 to-sky-400 backdrop-blur bg-opacity-70 overflow-hidden">
            <span className="flex flex-col items-center gap-4 text-blue-800">
              <FaReact className="animate-spin-slow" size={50}/>
              <span className="font-semibold text-3xl">Learn React Js</span>
            </span>
            <h2 className="text-center font-semibold text-xl">Login</h2>
            <div>
              <input
                type="text"
                className="p-2 rounded border border-stone-500 shadow outline-none w-full bg-transparent placeholder:text-zinc-700"
                placeholder="username"
                onChange={(e) => setUsername(e.target.value)}
                onBlur={(e) =>
                  e.target.value.length < 3
                    ? setUsernameError("*name must be greater than 3 chars")
                    : setUsernameError("")
                }
              />
              <p className="text-red-900">{usernameError}</p>
            </div>
            <div>
              <input
                type="password"
                className="p-2 rounded border border-stone-500 shadow outline-none w-full bg-transparent placeholder:text-zinc-700"
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
                onBlur={(e) =>
                  e.target.value.length < 8
                    ? setPasswordError("*password must be greater than 8 chars")
                    : setPasswordError("")
                }
              />
              <p className="text-red-900">{passwordError}</p>
            </div>
            <div className="space-y-2">
              <button
                type="submit"
                className="w-full bg-blue-600 shadow font-semibold text-white p-2 rounded"
              >
                Login
              </button>
              <button
                type="button"
                className="w-full hover:underline"
                onClick={() => setLoginPage(false)}
              >
                Skip Login
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
