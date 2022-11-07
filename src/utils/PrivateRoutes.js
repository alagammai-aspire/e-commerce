import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { Cart } from "../Context";

const PrivateRoutes = ({ children }) => {
  const { isLogin } = useContext(Cart);
  // let auth = { token: true };
  // return auth.token ? children : <Navigate to="/login" />;
  console.log("Is User Login?", isLogin);

  return isLogin ? children : <Navigate to="/login" />;
};

export default PrivateRoutes;
