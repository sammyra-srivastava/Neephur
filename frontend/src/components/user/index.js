import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../main/header";

const User = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};
export default User;
