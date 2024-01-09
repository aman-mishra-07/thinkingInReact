import React from "react";
import Home from "../pages/Home";

const ProtectedRoutes = ({ children, loggedIn }) => {
  return <>{loggedIn ? children : <Home />}</>;
};

export default ProtectedRoutes;
