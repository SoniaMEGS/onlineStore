import { useState, useEffect, useContext } from "react";
import LayOut from "../../components/layOut/LayOut";
import Cards from "../../components/cards/Cards.jsx";
import { ShoppingCartContext } from "../../context/ShoppingCartContext.jsx";
import ProductDetail from "../../components/productDetail/ProductDetail.jsx";
import { getItems } from "../../api/index.js";

const Home = () => {
  const { items, searchByTitle, setSearchByTitle, filteredItems } =
    useContext(ShoppingCartContext);

  const handleSearch = (event) => {
    const searchValue = event.target.value;
    console.log(searchValue);
    setSearchByTitle(searchValue);
  };

  return (
    <LayOut>
      <h1>Home</h1>
      <input
        type="text"
        placeholder="Search..."
        className="rounded-lg border border-black w-80 px-2 py-1 my-6 focus:outline-none"
        onChange={handleSearch}
      />
      <Cards items={filteredItems ? filteredItems : items} />
      <ProductDetail />
    </LayOut>
  );
};

export default Home;
