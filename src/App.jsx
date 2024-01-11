import React, { useState } from "react";
import Login from "./components/Login";
import Nav from "./components/Nav";
import RenderPage from "./components/RenderPage";
import SignUp from "./components/SignUp";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loginPage, setLoginPage] = useState(false);
  const [page, setPage] = useState("home");

  return (
    <>
      {loginPage ? (
        <Login
          loggedIn={loggedIn}
          setLoggedIn={setLoggedIn}
          setLoginPage={setLoginPage}
        />
      ) : (
        <div className="w-full min-h-screen">
          <Nav
            loggedIn={loggedIn}
            setLoggedIn={setLoggedIn}
            selectPage={setPage}
            setLoginPage={setLoginPage}
          />
          <RenderPage page={page} loggedIn={loggedIn} />
        </div>
      )}
      {/* <SignUp/> */}
    </>
  );
};

export default App;
