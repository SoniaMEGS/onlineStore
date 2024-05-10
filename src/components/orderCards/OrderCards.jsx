import React, { useContext } from "react";
import OrderCard from "../orderCard/OrderCard";
import { ShoppingCartContext } from "../../context/ShoppingCartContext.jsx";

const OrderCards = (props) => {
  const { shoppingCartProducts } = props;
  const { setShoppingCartProducts } = useContext(ShoppingCartContext);

  const handleDelete = (id) => {
    const filteredProducts = shoppingCartProducts.filter(
      (product) => product.id !== id
    );
    setShoppingCartProducts(filteredProducts);
  };

  return (
    <div className="w-full  p-1 mb-12 flex flex-col gap-4 overflow-y-auto">
      {shoppingCartProducts?.map(
        ({ name, id, image, price, qty, totalPrice }) => (
          <div key={id}>
            <OrderCard
              key={id}
              id={id}
              name={name}
              price={price}
              image={image}
              qty={qty}
              totalPrice={totalPrice}
              handleDelete={handleDelete}
            />
          </div>
        )
      )}
    </div>
  );
};

export default OrderCards;
