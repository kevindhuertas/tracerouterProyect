import React from "react";
import DashboardContainer from "../pages/DashboardContainer";
import history from "../../context/history";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { NavBar } from "./NavBar";

function Layout({ body }) {
  return (
    <BrowserRouter>
        <div className="relative min-h-screen max-h-screen w-full">
          <NavBar></NavBar>
          <Routes history={history}>
            <Route path="/" exact element={<DashboardContainer />} />
          </Routes>
        </div>
    </BrowserRouter>
  );
}

export default Layout;
