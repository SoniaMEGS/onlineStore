import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const activeStyle = "underline underline-offset-4";
  return (
    <nav className="w-full flex justify-between items-center p-4 fixed z-10 text-sm font-light">
      <ul className="flex items-center gap-4">
        <li className="font-semibold text-lg">
          <NavLink to="/">Shopi</NavLink>
        </li>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/clothes"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Clothes
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/electronics"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/fornitures"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Fornitures
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/toys"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Toys
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/others"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Others
          </NavLink>
        </li>
      </ul>
      <ul className="flex items-center gap-4">
        <li className="text-black/60">sonia@gmail.com</li>
        <li>
          <NavLink
            to="/myOrders"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            My orders
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/myAccount"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            My account
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/singIn"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Sing in
          </NavLink>
        </li>
        <li>Shopping Cart</li>
      </ul>
    </nav>
  );
};

export default NavBar;
