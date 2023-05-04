import React from "react";
import DashboardContainer from "../pages/DashboardContainer";
import history from "../../context/history";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { NavBar } from "./NavBar";

function Layout({ body }) {
  return (
    <BrowserRouter>
      <div className="absolute min-h-screen max-h-screen w-full">
        <NavBar></NavBar>
        <div className="container flex flex-col flex-auto  content-center p-5 lg:px-20  mx-auto ">
          <DashboardContainer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default Layout;
