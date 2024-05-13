import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import LayOut from "../../components/layOut/LayOut";
import OrderCardsLast from "../../components/orderCardsLast/OrderCardsLast.jsx";
import { ShoppingCartContext } from "../../context/ShoppingCartContext.jsx";

const MyOrder = () => {
  const { order } = useContext(ShoppingCartContext);
  const currentPath = window.location.pathname;
  let index = currentPath.substring(currentPath.lastIndexOf("/") + 1);
  if (index === "last") index = order?.length - 1;
  return (
    <LayOut>
      <div className="w-1/2 flex items-center justify-center relative mb-6">
        <div className="font-medium text-2xl">MyOrder</div>
        <Link to={"/myOrders"}>
          <IoIosArrowDropleftCircle className="absolute left-0 top-0 w-6 h-6" />
        </Link>
      </div>
      <OrderCardsLast order={order} index={index} />
    </LayOut>
  );
};

export default MyOrder;
