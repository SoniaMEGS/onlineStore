import React, { useContext } from "react";
import LayOut from "../../components/layOut/LayOut";
import { ShoppingCartContext } from "../../context/ShoppingCartContext.jsx";

const MyOrders = () => {
  const {
    count,
    setCount,
    shoppingCartProducts,
    setShoppingCartProducts,
    isCheckoutSideMenuOpen,
    closeCheckoutSideMenu,
    order,
    setOrder,
  } = useContext(ShoppingCartContext);
  return <LayOut>MyOrderss</LayOut>;
};

export default MyOrders;
