import { itemCartActions } from "./cart";
import { toggleCartActions } from "./toggleCart";

export const getData = () => {
  return async (dispatch) => {
    const sendRequest = async () => {
      const response = await fetch(
        "https://react-redux-ab1a5-default-rtdb.firebaseio.com/cart.json"
      );
      if (!response.ok) {
        throw new Error("Getting cart data failed.");
      }
      const data = await response.json();
      return data;
    };
    try {
      const gettingData = await sendRequest();
      console.log(gettingData);
      dispatch(
        itemCartActions.getCartFromDataBase({
          items: gettingData.items || [],
          totalQuantity: gettingData.totalQuantity,
        })
      );
    } catch (error) {
      dispatch(
        toggleCartActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Getting cart data failed!",
        })
      );
    }
  };
};
export const sendData = (cart) => {
  return async (dispatch) => {
    dispatch(
      toggleCartActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data!",
      })
    );
    const sendRequest = async () => {
      const response = await fetch(
        "https://react-redux-ab1a5-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify({
            items: cart.items,
            totalQuantity: cart.totalQuantity,
          }),
        }
      );
      console.log(response);
      if (response.status !== "200") {
        throw new Error("Sending cart data failed.");
      }
    };
    try {
      await sendRequest();
      dispatch(
        toggleCartActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Sent cart data successfully!",
        })
      );
    } catch (error) {
      dispatch(
        toggleCartActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Sending cart data failed!",
        })
      );
    }
  };
};
