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
  getItem("hello", "sub1", "", [
    getItem(<NavLink to="connect">Connect 1</NavLink>, "1"),
    getItem(<NavLink to="connect2">Connect 2</NavLink>, "2"),
    getItem(<NavLink to="connect3">Connect 3</NavLink>, "3"),
    getItem(<NavLink to="connect4">Connect 4</NavLink>, "4"),
  ]),
  getItem("Hii", "sub2", "", [
    getItem(<NavLink to="connect5">Connect 5</NavLink>, "5"),
    getItem(<NavLink to="connect6">Connect 6</NavLink>, "6"),
  ]),
];
