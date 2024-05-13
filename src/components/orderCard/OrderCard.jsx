import React from "react";
import { IoCloseCircleOutline } from "react-icons/io5";

const OrderCard = (props) => {
  const { name, id, image, price, qty, totalPrice, handleDelete } = props;

  return (
    <div className="relative w-full flex items-center gap-2">
      <figure className="w-2/6 flex justify-center items-center">
        <img
          src={image}
          alt={name}
          className="w-auto h-20 rounded-lg object-fill"
        />
      </figure>
      <div className="w-4/6 flex items-center gap-2 ">
        <p className="w-2/3 flex flex-col gap-2 text-sm font-light line-clamp-1">
          <span className="line-clamp-1">{name}</span>
          <span>U.P. ${price}</span>
          <span>Quantity: {qty}</span>
        </p>
        <p className="w-1/3 flex justify-end">
          <span className="text-lg font-medium">${totalPrice}</span>
        </p>
      </div>
      {handleDelete ? (
        <div className=" absolute -top-1 left-0  flex justify-end">
          <IoCloseCircleOutline
            className="cursor-pointer bg-white rounded-full flex justify-center items-center w-5 h-5"
            onClick={() => handleDelete(id)}
          />
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default OrderCard;
