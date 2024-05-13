import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { IoCloseCircleOutline } from "react-icons/io5";
import { ShoppingCartContext } from "../../context/ShoppingCartContext.jsx";
import { totalAmount } from "../../utils/index.js";
import OrderCards from "../orderCards/OrderCards.jsx";

const CheckoutSideMenu = () => {
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

  const handleCheckout = () => {
    const orderToAdd = {
      products: shoppingCartProducts,
      totalProducts: count,
      totalPrice: totalAmount(shoppingCartProducts),
    };
    setOrder((prevOrder) => [...prevOrder, orderToAdd]);
    setShoppingCartProducts([]);
    closeCheckoutSideMenu();
    setCount(0);
  };

  return (
    <aside
      className={`${
        isCheckoutSideMenuOpen ? "flex" : "hidden"
      } w-[360px] h-[calc(100%-90px)]  flex-col fixed right-0 border border-black rounded-lg bg-white p-4 z-10`}
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-medium text-xl">My order</h2>
        <figure onClick={() => closeCheckoutSideMenu()}>
          <IoCloseCircleOutline className="h-6 w-6 cursor-pointer" />
        </figure>
      </div>
      <OrderCards shoppingCartProducts={shoppingCartProducts} />
      <div className="absolute bottom-2 w-[calc(360px-32px)] p-2 bg-white flex items-center justify-between">
        <p className="">
          <span className="text-lg font-medium">
            Total amount: ${totalAmount(shoppingCartProducts)}
          </span>
        </p>
        <Link to="/myOrders/last">
          <button
            className="border py-1 px-2 rounded-lg bg-black text-white"
            onClick={() => handleCheckout()}
          >
            Checkout
          </button>
        </Link>
      </div>
    </aside>
  );
};

export default CheckoutSideMenu;
