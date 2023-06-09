import React, { useEffect, useState } from "react";
import Carousel from "react-material-ui-carousel";
import "./ProductDetails.css";
import { useSelector, useDispatch } from "react-redux";
import { getProductDetails } from "../../actions/productActions.js";
import { useParams } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { addToCart } from "../../axios/axios";

const ProductDetails = ({ match }) => {
  // add textarea and submit button after click on submit review  button
  var [textArea, setTextArea] = useState(false);
  const addReview = () => {
    setTextArea(!textArea);
  };

  //increase and decrease quantity of product by clicking on + and - button
  // var [quantity , setQuantity] = useState(1);
  // const increaseQuantity = () => {
  //     setQuantity(quantity + 1);
  // }
  // const decreaseQuantity = () => {
  //     if(quantity > 1){
  //         setQuantity(quantity - 1);
  //     }
  // }

  const dispatch = useDispatch();
  const { id } = useParams();

  // eslint-disable-next-line
  const { product, loading, error } = useSelector(
    (state) => state.productDetails
  );
  useEffect(() => {
    dispatch(getProductDetails(id));
  }, [dispatch, id]);

    // const options = {
    //   value: 4,
    //   edit: false,
    //   size: 24,
    //   activeColor: "#ffd700",
    // };

  return (
    <div className="ProductDetails">
      <div className="carousel">
        <Carousel>
          {product.images &&
            product.images.map((item, i) => (
              <img
                className="CarouselImage"
                key={item.url}
                src={item.url}
                alt={`${i} Slide`}
              />
            ))}
        </Carousel>
      </div>
      <div className="details">
        <div className="detailsBlock-1">
          <h2>{product.name}</h2>
          {/* <p>Product # {id}</p> */}
        </div>
        <div className="detailsBlock-2">
          <ReactStars 
            value={3}
            edit={false}
            size={24}
            activeColor="#ffd700"

          />
          <p>({product.numOfReviews}) Reviews</p>
          {textArea && (
            <div>
              <textarea cols={40}></textarea>
            </div>
          )}
          <div>
            <button className="submitReview" onClick={addReview}>
              {textArea ? "cancel" : "Submit Review"}
            </button>
            {textArea ? <button>Submit Review</button> : null}
          </div>
        </div>
        <div className="detailsBlock-4">
          Description : <p>{product.description}</p>
        </div>

        <div className="detailsBlock-3">
          <h2>Price: ₹{product.price}</h2>
          <div className="detailsBlock-3-1">
            <div className="detailsBlock-3-1-1">
              {/* <button onClick={decreaseQuantity}>-</button>
              <input type="number" value= {
                  quantity
              } />
              <button onClick={increaseQuantity}>+</button> */}
            </div>
            <button
              onClick={async () => {
                const orderItems = {
                  name: product.name,
                  // quantity: quantity,
                  price: product.price,
                  image: product.images[0].url,
                  product: product._id,
                };
                const response = await addToCart(orderItems);
                console.log(response);
                window.location.href = "/";
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
