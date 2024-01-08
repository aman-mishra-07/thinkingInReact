import React, { useState } from "react";
import Login from "./components/Login";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";

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
          {loggedIn ? (
            (page === "home" && <Home loggedIn={loggedIn} />) ||
            (page === "profile" && <Profile loggedIn={loggedIn} />) ||
            (page === "settings" && <Settings loggedIn={loggedIn} />)
          ) : (
            <Home />
          )}
        </div>
      )}
    </>
  );
};

export default App;

{
  /* {(skipLogin || loggedIn) && (
  <Nav loggedIn={loggedIn} setLoggedIn={setLoggedIn} selectPage={setPage} />
)}

{skipLogin &&
  ((page === "home" && <Home loggedIn={loggedIn} />) ||
    (page === "profile" && <Profile loggedIn={loggedIn} />) ||
    (page === "settings" && <Settings loggedIn={loggedIn} />))}

{loggedIn
  ? (page === "home" && <Home loggedIn={loggedIn} />) ||
    (page === "profile" && <Profile loggedIn={loggedIn} />) ||
    (page === "settings" && <Settings loggedIn={loggedIn} />)
  : !skipLogin && (
      <Login
        loggined={loggedIn}
        isLoggedIn={setLoggedIn}
        isSkippedLogin={setSkipLogin}
      />
    )} */
}
