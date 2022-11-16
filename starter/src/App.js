import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import { useSelector, useDispatch } from "react-redux";
import { calculateTotals, getCartItems } from "./features/cart/cartSlice";
import Modal from "./components/Modal";
import { useEffect } from "react";
function App() {
  const { cartItems, isLoading } = useSelector((store) => store.cart);
  const { isOpen } = useSelector((store) => store.modal);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculateTotals());

    return () => {};
  }, [cartItems]);

  useEffect(() => {
    dispatch(getCartItems());
  }, []);

  const loadingProducts = (
    <div className="loading">
      <h1>Loading...</h1>
    </div>
  );
  return (
    <main>
      {isOpen && <Modal />}

      <Navbar />
      {isLoading && loadingProducts}
      {!isLoading && <CartContainer />}
    </main>
  );
}
export default App;
