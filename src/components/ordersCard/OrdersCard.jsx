import React from "react";
import { IoIosArrowDroprightCircle } from "react-icons/io";

const OrdersCard = (props) => {
  const { totalPrice, totalProducts, date } = props;

  return (
    <div className="w-full flex items-center justify-between border border-black rounded-lg p-2">
      <p className="flex items-center">
        <span className="font-light text-lg">Date: {date}</span>
        <span className="font-light text-lg ml-6">
          Articles: {totalProducts}
        </span>
      </p>
      <p className="flex items-center">
        <span className="font-medium text-2xl">{totalPrice}</span>
        <IoIosArrowDroprightCircle className="w-6 h-6 ml-3" />
      </p>
    </div>
  );
};

export default OrdersCard;
