import { NavLink } from "react-router-dom";

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

export const items = [
  getItem("Master", "sub1", "", [
    getItem(<NavLink to="connect">Consignor</NavLink>, "1"),
    getItem(<NavLink to="connect2">Consignee</NavLink>, "2"),
    getItem(<NavLink to="connect3">Vehicle</NavLink>, "3"),
    getItem(<NavLink to="connect4">Locaion</NavLink>, "4"),
  ]),
  getItem("Hii", "sub2", "", [
    getItem(<NavLink to="connect5">Connect 5</NavLink>, "5"),
    getItem(<NavLink to="connect6">Connect 6</NavLink>, "6"),
  ]),
];
