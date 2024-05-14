import { createContext, useState, useEffect } from "react";
import { getItems } from "../api/index.js";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  const [items, setItems] = useState(null);
  const [filteredItems, setFilteredItems] = useState(null);
  const [count, setCount] = useState(0);
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
  const [productToShow, setProductToShow] = useState({});
  const [shoppingCartProducts, setShoppingCartProducts] = useState([]);
  const [order, setOrder] = useState([]);
  const [searchByTitle, setSearchByTitle] = useState(null);

  const openProductDetail = () => setIsProductDetailOpen(true);
  const closeProductDetail = () => setIsProductDetailOpen(false);

  const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true);
  const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);

  useEffect(() => {
    const fetchItems = async () => {
      const itemsResponse = await getItems();
      setItems(itemsResponse);
    };
    fetchItems();
  }, []);

  useEffect(() => {
    searchByTitle
      ? setFilteredItems(filteredItemsByTitle(items, searchByTitle))
      : setFilteredItems(null);
  }, [items, searchByTitle]);

  console.log(filteredItems);
  const filteredItemsByTitle = (items, searchByTitle) => {
    return items?.filter((item) =>
      item?.title?.toLowerCase().includes(searchByTitle.toLowerCase())
    );
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        count,
        setCount,
        openProductDetail,
        closeProductDetail,
        isProductDetailOpen,
        productToShow,
        setProductToShow,
        shoppingCartProducts,
        setShoppingCartProducts,
        isCheckoutSideMenuOpen,
        openCheckoutSideMenu,
        closeCheckoutSideMenu,
        order,
        setOrder,
        items,
        setItems,
        searchByTitle,
        setSearchByTitle,
        filteredItems,
        setFilteredItems,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
