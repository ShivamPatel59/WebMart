import React from "react";
import "./Cart.css";
import CartProduct from "../CartProduct/CartProduct";
import { getCartItems } from "../../axios/axios";
// const total = {
//   price: 0,
//   quantity: 0,
//   tax: 0,
//   shipping: 0,
//   total: 0,
// };

const Cart = () => {
  const [total, setTotal] = React.useState({
    price: 0,
    tax: 0,
    shipping: 0,
    total: 0,
  });
  const [cartItems, setCartItems] = React.useState([]);
  React.useEffect(() => {
    getCartItems().then((res) => {
      setCartItems(res.orders);
      // console.log(res.orders);
      let price = 0;
      res.orders.forEach((order) => {
        order.orderItems.forEach((item) => {
          price += item.price;
        });
      });
      setTotal({
        ...total,
        price: price,
        tax: price * 0.1,
        shipping: 10,
        total: price + price * 0.1 + 10,
      });
    });
  }, []);
    return (
    <div className="cart-page">
      <div className="cart-items">
        {
          cartItems.map((items) => {
            return items.orderItems.map((item, key) => {
              return (
                <div>
                <CartProduct name={item.name} image={item.image} totalprice={item.price} quantity={total.quantity } id={items._id}/>
                </div>
              )
            })
          })
        }
      </div>
      <div className="summary">
        <div class="summary-total-items">
          <span class="total-items">Your Bag </span>
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
