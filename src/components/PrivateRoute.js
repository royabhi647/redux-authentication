// PrivateRoute.js
import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

function PrivateRoute() {
  const currentUser = useSelector((state) => state.user.currentUser);
  console.log("currentUser", currentUser);

  if (currentUser) {
    return <Outlet />;
  } else {
    return <Navigate to="/login" />;
  }
}

export default PrivateRoute;
