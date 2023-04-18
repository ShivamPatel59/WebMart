import React, { useState } from "react";
import "./CartProduct.css";
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import { removeCartItem } from "../../axios/axios";



const CartProduct = ({
  image,
  name,
  totalprice,
  quantity,
  id
}) => {
  var [quantity , setQuantity] = useState(1);
    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    }
    const decreaseQuantity = () => {
        if(quantity > 1){
            setQuantity(quantity - 1);
        }
    }
    console.log(quantity, totalprice, name, image);
  return (
    <div class="item">
      <div class="delete-btn" onClick={async() => {
          const response = await removeCartItem(id);
          window.location.reload()
          console.log(response);
      }}  >
        <DeleteIcon />
      </div>

      <div class="image">
        <img src={image} alt="" />
      </div>

      <div class="description">
        <span>{name}</span>
      </div>

      <div className="quantity">
        <AddIcon onClick={increaseQuantity} className="quantity-btn"/>
        <input type="text" name="name" value={quantity} />
        <HorizontalRuleIcon onClick={decreaseQuantity} className="quantity-btn"/>
      </div>

      <div class="total-price">${totalprice}</div>
    </div>
  );
};

export default CartProduct;
