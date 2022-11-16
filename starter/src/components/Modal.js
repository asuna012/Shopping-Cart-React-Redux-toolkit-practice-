import React from "react";
import { clearCart } from "../features/cart/cartSlice";
import { toggleModal } from "../features/modal/modalSlice";
import { useDispatch } from "react-redux";
const Modal = () => {
  const dispatch = useDispatch();
  return (
    <aside className="modal-container">
      <div className="modal">
        <h4>Remove all items from your shopping cart?</h4>
        <div className="btn-container">
          <button
            className="btn confirm-btn"
            type="button"
            onClick={() => {
              dispatch(clearCart());
              dispatch(toggleModal());
            }}
          >
            Confirm
          </button>
          <button
            className="btn confirm-btn"
            type="button"
            onClick={() => {
              dispatch(toggleModal());
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Modal;
