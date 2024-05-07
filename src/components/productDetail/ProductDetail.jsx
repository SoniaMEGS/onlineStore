import React, { useContext } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import { ShoppingCartContext } from "../../context/ShoppingCartContext.jsx";

const ProductDetail = () => {
  const { count, setCount, closeProductDetail, isProductDetailOpen } =
    useContext(ShoppingCartContext);
  return (
    <aside
      className={`${
        isProductDetailOpen ? "flex" : "hidden"
      } w-[360px] h-[calc(100%-90px)]  flex-col fixed right-0 border border-black rounded-lg bg-white`}
    >
      <div className="flex justify-between items-center p-2">
        <h2 className="font-medium text-xl">Detail</h2>
        <figure onClick={() => closeProductDetail()}>
          <IoCloseCircleOutline className="h-6 w-6" />
        </figure>
      </div>
    </aside>
  );
};

export default ProductDetail;
