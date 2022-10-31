import React, { useContext, useState } from "react";
import { Cart } from "../Context";

const SingleProduct = ({ prod }) => {
  const { cart, setCart } = useContext(Cart);
  const [qty, setQty] = useState(1);

  return (
    <li key={prod.id} className="col-md-3">
      <div className="col-sm-12 prod-item">
        <h1>{prod.title}</h1>
        <div className="image">
          <img src={prod.image} alt={prod.title} />
        </div>
        <p className="price">${qty > 0 ? prod.price * qty : prod.price}</p>

        {cart.includes(prod) ? (
          <>
            <button
              className="btn btn-danger"
              onClick={() => setCart(cart.filter((c) => c.id !== prod.id))}
            >
              Remove from Cart
            </button>

            {/* inc dec section */}
            <div className="inc-dec-section">
              <button
                onClick={() => {
                  if (qty >= 1) setQty(qty - 1);
                  //   setCart([...cart, (prod.price = prod.price * qty)]);
                }}
              >
                -
              </button>
              <input
                type="number"
                value={qty}
                onChange={(e) => setQty(e.target.value)}
              />
              <button
                onClick={() => {
                  if (qty <= 9) setQty(qty + 1);
                  //   setCart(
                  //     cart.map((elm) => [...elm, (elm.price = elm.price * qty)])
                  //   );
                }}
              >
                +
              </button>
            </div>
          </>
        ) : (
          <button
            className="btn btn-primary"
            onClick={() => setCart([...cart, prod])}
          >
            Add to Cart
          </button>
        )}
      </div>
    </li>
  );
};

export default SingleProduct;
