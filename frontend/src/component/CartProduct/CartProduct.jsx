import React, { useState } from "react";
import "./CartProduct.css";
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';

const product = {
    //cart product details
    id: 1,
    name: "Apple iPhone 13 Pro Max",
    // color: "White",
    price: 1099,
    quantity: 2,
    image: "https://www.refurbished.nl/cache/images/iphone-13-pro-grafiet-frontandback_600x600_BGresize_16777215-tj.png",
}

const CartProduct = () => {
  var [quantity , setQuantity] = useState(1);
    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    }
    const decreaseQuantity = () => {
        if(quantity > 1){
            setQuantity(quantity - 1);
        }
    }
  return (
    <div class="item">
      <div class="delete-btn">
        <DeleteIcon />
      </div>

      <div class="image">
        <img src={product.image} alt="" />
      </div>

      <div class="description">
        <span>{product.name}</span>
      </div>

      <div className="quantity">
        <AddIcon onClick={increaseQuantity} className="quantity-btn"/>
        <input type="text" name="name" value={quantity} />
        <HorizontalRuleIcon onClick={decreaseQuantity} className="quantity-btn"/>
      </div>

      <div class="total-price">$549</div>
    </div>
  );
};

export default CartProduct;
