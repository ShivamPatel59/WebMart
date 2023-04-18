import React from "react";
import "./Cart.css";
import CartProduct from "../CartProduct/CartProduct";

const total = {
  price: 123,
  quantity: 7,
  tax: 15,
  shipping: 8,
  total: 345,
};

const Cart = () => {
  return (
    <div className="cart-page">
      <div className="cart-items">
        <CartProduct />
        <CartProduct />
        <CartProduct />
        <CartProduct />
      </div>
      <div className="summary">
        <div class="summary-total-items">
          <span class="total-items">{total.quantity} Items in your Bag </span>
        </div>
        <div class="summary-subtotal">
          <ul>
            <li class="subtotal-line subtotal-line-total">
              <div class="subtotal-line-label">Subtotal</div>
              <div class="subtotal-line-value">${total.price}</div>
            </li>
            <li class="subtotal-line">
              <div class="subtotal-line-label">Shipping</div>
              <div class="subtotal-line-value">${total.shipping}</div>
            </li>
            <li class="subtotal-line">
              <div class="subtotal-line-label">Tax</div>
              <div class="subtotal-line-value">${total.tax}</div>
            </li>
          </ul>
        </div>
        <div class="summary-total">
          <ul>
            <li class="subtotal-line">
              <div class="total-line-label">
              <span>
              Total
              </span>
              </div>
              <div class="total-line-value">
              <span>
              ${total.total}
              </span>
              </div>
            </li>
          </ul>
        </div>
        <div class="summary-checkout">
          <button class="checkout-cta">Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
