import { useState } from "react";
import { useRoutes, BrowserRouter } from "react-router-dom";
import { ShoppingCartProvider } from "../../context/ShoppingCartContext.jsx";
import Home from "../home/Home.jsx";
import MyAccount from "../myAccount/MyAccount.jsx";
import MyOrders from "../myOrders/MyOrders.jsx";
import MyOrder from "../myOrder/MyOrder.jsx";
import SingIn from "../singIn/SingIn.jsx";
import NotFound from "../notFound/NotFound.jsx";
import NavBar from "../../components/navBar/NavBar.jsx";
import CheckoutSideMenu from "../../components/checkoutSideMenu/CheckoutSideMenu.jsx";
import "../../App.css";

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/myAccount", element: <MyAccount /> },
    { path: "/myOrders", element: <MyOrders /> },
    { path: "/myOrder", element: <MyOrder /> },
    { path: "/myOrders/last", element: <MyOrder /> },
    { path: "/myOrders/:id", element: <MyOrder /> },
    { path: "/singIn", element: <SingIn /> },
    { path: "/*", element: <NotFound /> },
  ]);
  return routes;
};

function App() {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <NavBar />
        <CheckoutSideMenu />
        <AppRoutes />
      </BrowserRouter>
    </ShoppingCartProvider>
  );
}

export default App;
