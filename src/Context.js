import { createContext, useState } from "react";

export const Cart = createContext();

const Context = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [qty, setQty] = useState(1);

  const [emaillog, setEmail] = useState("");
  const [passwordlog, setPassword] = useState("");

  const [isLogin, setIsLogin] = useState(false);

  let getItems = JSON.parse(localStorage.getItem("Items"));
  return (
    <>
      <Cart.Provider
        value={{
          cart,
          setCart,
          qty,
          setQty,
          getItems,
          emaillog,
          setEmail,
          passwordlog,
          setPassword,
          setIsLogin,
          isLogin,
        }}
      >
        {children}
      </Cart.Provider>
    </>
  );
};

export default Context;
