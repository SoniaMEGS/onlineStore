import React, { useContext } from "react";
import OrderCard from "../orderCard/OrderCard";
import { ShoppingCartContext } from "../../context/ShoppingCartContext.jsx";

const OrderCardsLast = (props) => {
  const { order, index } = props;

  const { setShoppingCartProducts } = useContext(ShoppingCartContext);

  return (
    <div className="w-1/2 flex flex-col mt-6 gap-12 overflow-y-auto">
      {order?.[index]?.products.map(
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
            />
          </div>
        )
      )}
    </div>
  );
};

export default OrderCardsLast;
