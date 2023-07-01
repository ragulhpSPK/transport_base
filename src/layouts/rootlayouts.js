import React from "react";
import SideNavbar from "../sideNavbar";
import { Outlet } from "react-router-dom";

function rootlayouts() {
  return (
    <div className="flex">
      <SideNavbar />
      <Outlet />
    </div>
  );
}

export default rootlayouts;
