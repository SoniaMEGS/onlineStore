import React, { useContext } from "react";
import LayOut from "../../components/layOut/LayOut";
import OrderCardsLast from "../../components/orderCardsLast/OrderCardsLast.jsx";
import { ShoppingCartContext } from "../../context/ShoppingCartContext.jsx";

const MyOrder = () => {
  const { order } = useContext(ShoppingCartContext);
  return (
    <LayOut>
      <div>MyOrder</div>
      <OrderCardsLast order={order} />
    </LayOut>
  );
};

export default MyOrder;
