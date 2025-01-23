import { createContext, useState } from "react";

const ShoppingCartContext = createContext();

const ShoppingCartProvider = ({ children }) => {
  //Shopping cart * Increment quantity
  const [count, setCount] = useState(0);

  //Product Detail * Open/close
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const openProductDetails = () => setIsProductDetailOpen(true);
  const closeProductDetails = () => setIsProductDetailOpen(false);

  //Product Detail. Show product
  const [productToShow, setProductToShow] = useState({});

  // Shopping Cart * Add product to cart
  const [cartProducts, setCartProducts] = useState([]);

  return (
    <ShoppingCartContext.Provider
      value={{
        count,
        setCount,
        isProductDetailOpen,
        openProductDetails,
        closeProductDetails,
        productToShow,
        setProductToShow,
        cartProducts,
        setCartProducts,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export { ShoppingCartContext, ShoppingCartProvider };
