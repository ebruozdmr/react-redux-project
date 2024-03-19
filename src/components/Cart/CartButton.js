import classes from "./CartButton.module.css";
import { useDispatch, useSelector } from "react-redux";
import { toggleCartActions } from "../../store/toggleCart";

const CartButton = (props) => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  console.log(totalQuantity);
  const dispatchFn = useDispatch();
  const toggleCartHandler = () => {
    dispatchFn(toggleCartActions.toggleCart());
  };
  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
