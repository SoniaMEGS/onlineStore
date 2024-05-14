import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { ShoppingCartContext } from "../../context/ShoppingCartContext.jsx";

const NavBar = () => {
  const { count, setCount, setSearchByCategory } =
    useContext(ShoppingCartContext);
  const activeStyle = "underline underline-offset-4";
  return (
    <nav className="w-full flex justify-between items-center p-4 fixed z-10 top-0 text-lg font-light bg-white">
      <ul className="flex items-center gap-4">
        <li className="font-semibold text-xl">
          <NavLink to="/" onClick={() => setSearchByCategory()}>
            Shopi
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/"
            onClick={() => setSearchByCategory()}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/men's-clothing"
            onClick={() => setSearchByCategory("men's clothing")}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Men's clothing
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/women's-clothing"
            onClick={() => setSearchByCategory("women's clothing")}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Women's clothing
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/electronics"
            onClick={() => setSearchByCategory("electronics")}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/jewelery"
            onClick={() => setSearchByCategory("jewelery")}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Jewelery
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
        <li>
          <div className="relative ">
            <FiShoppingCart className="w-5 h-5" />
            <p className="absolute -top-2 -right-2 bg-black border-none border-black rounded-full w-4 h-4 text-xs font-medium text-white flex justify-center items-center">
              {count}
            </p>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
