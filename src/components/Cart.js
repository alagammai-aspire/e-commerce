import React, { useContext, useState, useEffect } from "react";
import Header from "./Header";
import { Cart } from "../Context";
import SingleProduct from "./SingleProduct";

const Cartpage = () => {
  const { cart, qty } = useContext(Cart);

  // const [total, setTotal] = useState();

  console.log("cart has", cart);

  console.log("cart value is", cart);

  return (
    <>
      <Header />
      <div className="row cart-item">
        {cart.length !== 0 ? (
          cart.map((prod) => {
            return <SingleProduct prod={prod} cart={cart} key={prod.id} />;
          })
        ) : (
          <div className="noprod">No Producrs available as of now</div>
        )}
        {cart.length !== 0 && (
          <div className="col-sm-12 totalprice text-right float-right">
            <h3
              className="text-right"
              style={{ textAlign: "right", marginTop: "20px", color: "red" }}
            >
              {/* <b>Total Price is:</b> ${total} */}
              <b>
                Total amountL: $
                {cart.reduce(
                  (total, item) => Math.trunc(total + item.price * qty),
                  0
                )}
              </b>
            </h3>
          </div>
        )}
      </div>
    </>
  );
};

export default Cartpage;
