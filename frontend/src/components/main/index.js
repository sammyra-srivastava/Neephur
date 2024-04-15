import React from "react";
import { Outlet } from "react-router-dom";

import Header from "../../components/main/header"
import Footer from "../../components/main/footer"

const Main = () => {
  return (
    <div style={{ height: "100vh" }}>
     <Header></Header>
     <Outlet></Outlet>
     <Footer></Footer>
    </div>
  );
};
export default Main;
