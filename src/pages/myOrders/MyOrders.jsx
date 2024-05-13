import React, { useContext } from "react";
import LayOut from "../../components/layOut/LayOut";
import OrdersCards from "../../components/ordersCards/OrdersCards.jsx";
import { ShoppingCartContext } from "../../context/ShoppingCartContext.jsx";

const MyOrders = () => {
  const { order } = useContext(ShoppingCartContext);
  return (
    <LayOut>
      <div className="font-medium text-2xl mb-6">MyOrders</div>
      <OrdersCards order={order} />
    </LayOut>
  );
};

export default MyOrders;
