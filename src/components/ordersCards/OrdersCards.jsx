import React, { useContext } from "react";
import { Link } from "react-router-dom";
import OrdersCard from "../ordersCard/OrdersCard";

const OrdersCards = (props) => {
  const { order } = props;

  return (
    <div className="w-1/2 flex flex-col gap-4">
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
