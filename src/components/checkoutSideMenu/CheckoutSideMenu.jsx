import React, { useContext } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import { ShoppingCartContext } from "../../context/ShoppingCartContext.jsx";

const CheckoutSideMenu = () => {
  const {
    count,
    setCount,
    closeProductDetail,
    isProductDetailOpen,
    productToShow,
    setProductToShow,
    isCheckoutSideMenuOpen,
    openCheckoutSideMenu,
    closeCheckoutSideMenu,
  } = useContext(ShoppingCartContext);

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
      {/* <figure className="rounded-lg mb-4 w-full h-auto flex justify-center">
        <img
          src={productToShow.image}
          alt=""
          className="w-3/5 h-auto rounded-lg"
        />
      </figure>
      <p className="flex flex-col gap-2 ">
        <span className="font-medium text-2xl">$ {productToShow.price}</span>
        <span className="font-medium text-md">{productToShow.name}</span>
      </p> */}
    </aside>
  );
};

export default CheckoutSideMenu;
