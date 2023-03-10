import { useState, createContext } from "react";

import PRODUCTS from "../data/shop-data.json";

export const ProductContext = createContext({
  product: PRODUCTS,
  setProduct: () => null,
});

export const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState(PRODUCTS);
  const value = { products, setProducts };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
