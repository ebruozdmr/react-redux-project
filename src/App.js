import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Notification from "./components/UI/Notification";
import { sendData } from "./store/cartDataActions";
import { getData } from "./store/cartDataActions";

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const isToggle = useSelector((state) => state.toggleCart.isCartShown);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.toggleCart.notification);

  console.log(notification);
  console.log(cart);

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  useEffect(() => {
    //????
    if (isInitial) {
      isInitial = false;
      return;
    }
    if (cart.changed) {
      dispatch(sendData(cart));
    }
  }, [cart, dispatch]);

  return (
    <>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {isToggle && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
