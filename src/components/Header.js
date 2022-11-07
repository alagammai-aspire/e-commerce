import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Cart } from "../Context";

const Header = () => {
  const { cart } = useContext(Cart);
  const power = {
    color: "red",
    background: "#fff",
    width: "30px",
    height: "30px",
    borderRadius: "100%",
    textAlign: "center",
    lineHeight: "30px",
    float: "right",
  };
  return (
    <>
      <ul className="header">
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/cart">
            Cart <span className="bgred">{cart.length}</span>
          </Link>
        </li>
        <li className="pull-right text-right">
          <Link to="/login">
            {" "}
            <i className="fa fa-power-off" style={power} aria-hidden="true"></i>
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Header;
