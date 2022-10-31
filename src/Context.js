import { createContext, useState } from "react";

export const Cart = createContext();

const Context = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [qty, setQty] = useState(1);
  return (
    <>
      <Cart.Provider value={{ cart, setCart, qty, setQty }}>
        {children}
      </Cart.Provider>
    </>
  );
};

export default Context;
