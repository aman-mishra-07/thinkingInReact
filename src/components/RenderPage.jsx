import React from "react";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Settings from "../pages/Settings";
import ProtectedRoutes from "./ProtectedRoutes";
import Login from "./Login";

const RenderPage = ({ page, loggedIn }) => {
  let activePage;
  switch (page) {
    case "home":
      activePage = <Home />;
      break;
    case "profile":
      activePage = (
        <ProtectedRoutes loggedIn={loggedIn}>
          <Profile />
        </ProtectedRoutes>
      );
      break;
    case "settings":
      activePage = (
        <ProtectedRoutes loggedIn={loggedIn}>
          <Settings />
        </ProtectedRoutes>
      );
      break;
    default:
      activePage = <Login />;
      break;
  }
  return <>{activePage}</>;
};

export default RenderPage;
