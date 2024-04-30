import React from "react";

const Card = () => {
  return (
    <div className="w-56 h-60 bg-white rounded-lg cursor-pointer">
      <figure className="relative rounded-lg mb-4 w-full h-4/5">
        <span className="absolute bottom-0 left-0 m-1 px-2 py-0.5 bg-white/60 rounded-full text-black text-sm">
          Electronics
        </span>
        <img
          className="w-full h-full rounded-lg object-cover"
          src="https://images.pexels.com/photos/4887151/pexels-photo-4887151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Headphones"
        />
        <div className="absolute top-0 right-0 m-1 flex justify-center items-center bg-white w-6 h-6 rounded-full">
          +
        </div>
      </figure>
      <p className="flex justify-between">
        <span className="text-sm font-light">Headphones</span>
        <span className="text-lg font-medium">$50</span>
      </p>
    </div>
  );
};

export default Card;
