import { useState, useEffect } from "react";
import LayOut from "../../components/layOut/LayOut";
import Cards from "../../components/cards/Cards.jsx";
import { getItems } from "../../api/index.js";

const Home = () => {
  const [items, setItems] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      const itemsResponse = await getItems();
      setItems(itemsResponse);
    };
    fetchItems();
  }, []);

  return (
    <LayOut>
      Home
      <Cards items={items} />
    </LayOut>
  );
};

export default Home;
