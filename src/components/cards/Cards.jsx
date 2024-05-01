import React from "react";
import Card from "../card/Card";

const Cards = (props) => {
  const { items } = props;
  return (
    <div className="w-full max-w-screen-lg grid gap-12 grid-cols-4">
      {items?.map(({ title, id, category, image, price }) => (
        <div key={id}>
          <Card
            key={id}
            id={id}
            name={title}
            category={category}
            price={price}
            image={image}
          />
        </div>
      ))}
    </div>
  );
};

export default Cards;
