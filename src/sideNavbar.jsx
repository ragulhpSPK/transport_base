import React, { useEffect } from "react";
import { Menu } from "antd";
import { items } from "./helper/menu";
import { useLocation } from "react-router-dom";

function SideNavbar() {
  const location = useLocation();

  return (
    <div className="w-[15vw] h-screen shadow">
      <div className="text-center flex text-xl font-bold items-center shadow justify-between px-[6vw]  !bg-white h-[10vh]  text-green-600 w-screen py-3">
        <h1>Logo</h1>
        <div>{location.pathname.split("/")[1]}</div>
        <div>Logout</div>
      </div>
      <Menu items={items} mode="inline"></Menu>
    </div>
  );
}

export default SideNavbar;
