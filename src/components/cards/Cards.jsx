import React from "react";
import Card from "../card/Card";

const Cards = (props) => {
  const { items } = props;
  return (
    <div className="w-full max-w-screen-lg ">
      {items?.length !== 0 ? (
        <div className="grid gap-12 grid-cols-4">
          {items?.map(({ title, id, category, image, price, description }) => (
            <div key={id}>
              <Card
                key={id}
                id={id}
                name={title}
                category={category}
                price={price}
                image={image}
                description={description}
              />
            </div>
          ))}
        </div>
      ) : (
        <div>Ups! it seems that we have not what you are looking for</div>
      )}
    </div>
  );
};

export default Cards;
