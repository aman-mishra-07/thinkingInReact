import React, { useState } from "react";
import Login from "./components/Login";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [skipLogin, setSkipLogin] = useState(false);
  const [page, setPage] = useState("home");

  return (
    <div className="w-full min-h-screen">
      {skipLogin && <Nav loggedIn={loggedIn} selectPage={setPage} />}
      {loggedIn && <Nav loggedIn={loggedIn} selectPage={setPage} />}
      
      {skipLogin && ((page === 'home') && <Home loggedIn={loggedIn} /> )
       || ((page === 'profile') && <Profile loggedIn={loggedIn} /> )
       || ((page === 'settings') && <Settings loggedIn={loggedIn} /> )
      }
      

      {loggedIn ? 
      ( ((page === 'home') && <Home loggedIn={loggedIn} /> )
       || ((page === 'profile') && <Profile loggedIn={loggedIn} /> )
      
      ) : (!skipLogin && <Login loggined={loggedIn} isLoggedIn={setLoggedIn} isSkippedLogin={setSkipLogin}/>
      )}
      {/* <Home/> */}
    </div>
  );
};

export default App;
