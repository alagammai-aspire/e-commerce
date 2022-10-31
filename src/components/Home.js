import React, { useEffect, useState } from "react";
import Header from "./Header";
import axios from "axios";
import SingleProduct from "./SingleProduct";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      setProducts(response.data);
    });
  }, []);

  return (
    <>
      <Header />
      <ul className="row product">
        {products.map((prod) => {
          return (
            <>
              <SingleProduct prod={prod} key={prod.id} />
            </>
          );
        })}
      </ul>
    </>
  );
};

export default Home;
