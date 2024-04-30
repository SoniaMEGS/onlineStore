import { useState } from "react";
import { useRoutes, BrowserRouter } from "react-router-dom";
import Home from "../home/Home.jsx";
import MyAccount from "../myAccount/MyAccount.jsx";
import MyOrders from "../myOrders/MyOrders.jsx";
import MyOrder from "../myOrder/MyOrder.jsx";
import SingIn from "../singIn/SingIn.jsx";
import NotFound from "../notFound/NotFound.jsx";
import NavBar from "../../components/navBar/NavBar.jsx";
import "../../App.css";

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/myAccount", element: <MyAccount /> },
    { path: "/myOrders", element: <MyOrders /> },
    { path: "/myOrder", element: <MyOrder /> },
    { path: "/singIn", element: <SingIn /> },
    { path: "/*", element: <NotFound /> },
  ]);
  return routes;
};

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
