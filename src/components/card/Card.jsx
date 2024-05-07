import React, { useContext } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { ShoppingCartContext } from "../../context/ShoppingCartContext.jsx";

const Card = (props) => {
  const { name, id, category, image, price, description } = props;
  const {
    count,
    setCount,
    openProductDetail,
    isProductDetailOpen,
    productToShow,
    setProductToShow,
    shoppingCartProducts,
    setShoppingCartProducts,
    isCheckoutSideMenuOpen,
    openCheckoutSideMenu,
    closeCheckoutSideMenu,
  } = useContext(ShoppingCartContext);

  const showProduct = (productData) => {
    openProductDetail();
    setProductToShow(productData);
  };

  const addProductsToCart = (productData) => {
    setCount(count + 1);
    const existingProductIndex = shoppingCartProducts.findIndex(
      (product) => product.id === productData.id
    );
    console.log(existingProductIndex);

    if (existingProductIndex !== -1) {
      const updatedShoppingCartProducts = [...shoppingCartProducts];
      updatedShoppingCartProducts[existingProductIndex].qty += 1;
      setShoppingCartProducts(updatedShoppingCartProducts);
    } else {
      const productWithQty = { ...productData, qty: 1 };
      const shoppingCartProductsCopy = [
        ...shoppingCartProducts,
        productWithQty,
      ];
      setShoppingCartProducts(shoppingCartProductsCopy);
    }
    openCheckoutSideMenu();
  };

  return (
    <div className="w-56 h-60 bg-white rounded-lg  border border-gray-400 p-4">
      <figure className="relative rounded-lg mb-4 w-full h-4/5">
        <span className="absolute bottom-0 left-0 m-1 px-4 py-1 bg-gray-200 bg-opacity-90 rounded-full text-black text-sm">
          {category}
        </span>
        <img
          className="w-full h-full rounded-lg cursor-pointer object-fill"
          src={image}
          alt={name}
          onClick={() =>
            showProduct({ name, id, category, image, price, description })
          }
        />
        <CiCirclePlus
          className="absolute -top-4 -right-4 m-1 cursor-pointer bg-white rounded-full flex justify-center items-center w-6 h-6"
          onClick={() =>
            addProductsToCart({ name, id, category, image, price, description })
          }
        />
      </figure>
      <p className="flex justify-between items-center gap-8">
        <span className="text-sm font-light truncate">{name}</span>
        <span className="text-lg font-medium">${price}</span>
      </p>
    </div>
  );
};

export default Card;
