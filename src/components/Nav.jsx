import React from "react";
import { IoIosLogOut } from "react-icons/io";
import { IoIosLogIn } from "react-icons/io";

const Nav = ({ loggedIn, setLoggedIn, selectPage, setLoginPage }) => {
  return (
    <>
      <div className="w-full px-8 py-4 bg-red-300 flex items-center justify-between">
        <span className="text-2xl font-bold">Learning React js</span>
        <ul className="flex items-center gap-4">
          <li>
            <button
              type="button"
              className="font-semibold p-2 hover:rounded-lg  hover:bg-slate-100"
              onClick={() => {
                loggedIn && selectPage("home");
              }}
            >
              Home
            </button>
          </li>
          <li>
            <button
              type="button"
              className="font-semibold p-2 hover:rounded-lg  hover:bg-slate-100"
              onClick={() => {
                loggedIn && selectPage("profile");
                !loggedIn && setLoginPage(true);
              }}
            >
              Profile
            </button>
          </li>
          <li>
            <button
              type="button"
              className="font-semibold p-2 hover:rounded-lg  hover:bg-slate-100"
              onClick={() => {
                loggedIn && selectPage("settings");
                !loggedIn && setLoginPage(true);
              }}
            >
              Settings
            </button>
          </li>
          <li>
            {
              <button
                type="button"
                className="font-semibold rounded-lg p-2 bg-slate-300 "
                onClick={() =>
                  loggedIn ? setLoggedIn(false) : setLoginPage(true)
                }
              >
                {loggedIn ? (
                  <span className="flex items-center gap-1">
                    Logout <IoIosLogOut size={20} />
                  </span>
                ) : (
                  <span className="flex items-center gap-1">
                    Login <IoIosLogIn size={20} />  
                  </span>
                )}
              </button>
            }
          </li>
        </ul>
      </div>
    </>
  );
};

export default Nav;
