import React from "react";
import "./CartProduct.css";
import DeleteIcon from '@mui/icons-material/Delete';

const product = {
    //cart product details
    id: 1,
    name: "Apple iPhone 13 Pro Max",
    // color: "White",
    price: 1099,
    quantity: 2,
    image: "item-1.png",
}

const CartProduct = () => {
  return (
    <div class="item">
      <div class="buttons">
        <span class="delete-btn">
            <DeleteIcon />
        </span>
      </div>

      <div class="image">
        <img src="item-1.png" alt="" />
      </div>

      <div class="description">
        <span>Common Projects</span>
        <span>Bball High</span>
        <span>White</span>
      </div>

      <div class="quantity">
        <button class="plus-btn" type="button" name="button">
          <img src="plus.svg" alt="" />
        </button>
        <input type="text" name="name" value="1" />
        <button class="minus-btn" type="button" name="button">
          <img src="minus.svg" alt="" />
        </button>
      </div>

      <div class="total-price">$549</div>
    </div>
  );
};

export default CartProduct;
