import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Cart } from "../Context";

const Header = () => {
  const { cart } = useContext(Cart);
  return (
    <>
      <ul className="header">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/cart">
            Cart <span className="bgred">{cart.length}</span>
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Header;
