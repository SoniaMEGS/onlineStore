import React, { useContext } from "react";
import { Link } from "react-router-dom";
import OrdersCard from "../ordersCard/OrdersCard";

const OrdersCards = (props) => {
  const { order } = props;
  console.log(order);
  return (
    <div className="w-1/2">
      {order?.map(({ totalPrice, totalProducts, date }, index) => (
        <Link key={index} to={`/myOrders/${index}`}>
          <OrdersCard
            date={date}
            totalPrice={totalPrice}
            totalProducts={totalProducts}
          />
        </Link>
      ))}
    </div>
  );
};

export default OrdersCards;
