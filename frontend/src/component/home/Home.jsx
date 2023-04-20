import React, { useEffect } from "react";
import "./home.css";
import Product from "./Product.js";
import MetaData from "../layout/MetaData";
import { getProduct } from "../../actions/productActions"; // eslint-disable-next-line
import { useDispatch, useSelector } from "react-redux"; // eslint-disable-next-line
import Loader from "../layout/loader/Loader";

const Home = () => {
  // eslint-disable-next-line
  const { loading, error, products } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);
  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <MetaData title="WebMart" />
          {products ? (
            <h3 className="homeHeading">Featured Content</h3>
          ) : (
            alert("Sign in to access the resource. Redirecting to Login Page"),
            setTimeout(() => {

            window.location.href = '/login'
            }, 0)
          )}
          <div className="container">
            
            {products ? (
              products.map((product) => <Product product={product} />)
            ) : (
              null
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
