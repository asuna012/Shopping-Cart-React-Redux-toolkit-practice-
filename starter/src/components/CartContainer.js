import React from "react";
import CartItem from "./CartItem";
import { useSelector, useDispatch } from "react-redux";

import { toggleModal } from "../features/modal/modalSlice";
const CartContainer = () => {
  const { cartItems, total, amount } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  const isEmpty = (
    <section className="cart">
      <header>
        <h2>Your Bag</h2>
        <h4 className="empty-cart">is currently empty</h4>
      </header>
    </section>
  );

  const hasItems = (
    <section className="cart">
      <header>
        <h2>Your Bag</h2>
      </header>
      <div>
        {cartItems.map((cartItem) => {
          return <CartItem key={cartItem.id} {...cartItem} />;
        })}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>${total.toFixed(2)}</span>
          </h4>
        </div>
        <button
          className="btn clear-btn"
          onClick={() => dispatch(toggleModal())}
        >
          Clear Cart
        </button>
      </footer>
    </section>
  );

  return <div> {amount > 0 ? hasItems : isEmpty}</div>;
};

export default CartContainer;
