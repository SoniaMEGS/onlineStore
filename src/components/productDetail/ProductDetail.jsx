import React, { useContext } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import { ShoppingCartContext } from "../../context/ShoppingCartContext.jsx";

const ProductDetail = () => {
  const {
    count,
    setCount,
    closeProductDetail,
    isProductDetailOpen,
    productToShow,
    setProductToShow,
  } = useContext(ShoppingCartContext);
  console.log(productToShow);

  return (
    <aside
      className={`${
        isProductDetailOpen ? "flex" : "hidden"
      } w-[360px] h-[calc(100%-90px)]  flex-col fixed right-0 border border-black rounded-lg bg-white p-4`}
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-medium text-xl">Detail</h2>
        <figure onClick={() => closeProductDetail()}>
          <IoCloseCircleOutline className="h-6 w-6 cursor-pointer" />
        </figure>
      </div>
      <figure className="rounded-lg mb-4 w-full h-1/3">
        <img
          src={productToShow.image}
          alt=""
          className="w-full h-full rounded-lg object-fill"
        />
      </figure>
      <p className="flex flex-col gap-2 ">
        <span className="font-medium text-2xl">$ {productToShow.price}</span>
        <span className="font-medium text-md">{productToShow.name}</span>
        <span className="font-light text-sm">{productToShow.description}</span>
      </p>
    </aside>
  );
};

export default ProductDetail;
