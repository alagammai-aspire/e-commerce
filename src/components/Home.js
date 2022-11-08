import React, { useContext, useEffect, useState } from "react";
import Header from "./Header";
import axios from "axios";
import SingleProduct from "./SingleProduct";
import { Cart } from "../Context";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Home = () => {
  const { loading, setLoading } = useContext(Cart);
  const [products, setProducts] = useState([]);
  const [inputitem, setInputitem] = useState(products);

  useEffect(() => {
    axios.get("https://api.escuelajs.co/api/v1/products").then((response) => {
      setProducts(response.data);
      setLoading(false);
    });
  }, []);

  // const searchFn = () => {
  //   let newFilter = products.filter((item) => {
  //     return item.title.toLowerCase().match(inputitem);
  //   });
  //   setProducts(newFilter);
  // };

  const filteredProducts = products.filter((elem) => {
    if (elem.title.toLowerCase().match(inputitem)) {
      return elem;
    }
  });

  return (
    <>
      <Header />
      {/* filter */}
      <div className="text-center col-sm-12 mt-4 mb-3">
        <input
          type="text"
          placeholder="search products"
          value={inputitem}
          onChange={(e) => setInputitem(e.target.value)}
          className="search "
        />
      </div>

      {loading === true && (
        <>
          <SkeletonTheme baseColor="white" highlightColor="#ccc">
            <div className="col-sm-12">
              <div className="row" style={{ padding: "40px" }}>
                <div className="col-md-3">
                  <Skeleton height={473} width={341} />
                </div>
                <div className="col-md-3">
                  <Skeleton height={473} width={341} />
                </div>
                <div className="col-md-3">
                  <Skeleton height={473} width={341} />
                </div>
                <div className="col-md-3">
                  <Skeleton height={473} width={341} />
                </div>
              </div>
            </div>
          </SkeletonTheme>

          {/* <SkeletonTheme color="grey" highlightColor="#444">
            <p>
              <Skeleton height={250} width={300} count={1} />
            </p>
          </SkeletonTheme>
          <SkeletonTheme color="#990" highlightColor="#550">
            <p>
              <Skeleton height={250} width={300} count={1} />
            </p>
          </SkeletonTheme> */}
        </>
      )}

      <ul className="row product">
        {filteredProducts &&
          filteredProducts.slice(0, 20).map((prod) => {
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
