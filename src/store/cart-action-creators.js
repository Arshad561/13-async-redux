import { uiActions } from './ui-slice';
import { cartActions } from './cart-slice';

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchCartFromServer = async () => {
      dispatch(uiActions.showNotification({
        status: 'fetching',
        title: 'Fetching..',
        message: 'Fetching cart data!'
      }));
      try {
        const response = await fetch('some url');
        if (!response.ok) {
          throw new Error();
        }
        const cart = await response.json();
        dispatch(cartActions.replaceCart({
          items: cart.items,
          totalQuantity: cart.totalQuantity
        }))
        dispatch(uiActions.showNotification({
          status: 'success',
          title: 'Success!',
          message: 'Fetched cart data successfully!'
        }));
      } catch (err) {
        dispatch(uiActions.showNotification({
          status: 'error',
          title: 'Error!',
          message: 'Fetching cart data failed!'
        }));
      }
    };
    fetchCartFromServer();
  }
}

export const sendCartData = (cart) => {
  return (dispatch) => {
    const saveCartOnServer = async () => {
      dispatch(uiActions.showNotification({
        status: 'pending',
        title: 'Sending..',
        message: 'Sending cart data!'
      }));
      try {
        const response = await fetch('some url', {
          method: 'PUT',
          body: JSON.stringify({items: cart.items, totalQuantity: cart.totalQuantity})
        });
        if (!response.ok) {
          throw new Error();
        }
        dispatch(uiActions.showNotification({
          status: 'success',
          title: 'Success!',
          message: 'Sent cart data successfully!'
        }));
      } catch (err) {
        dispatch(uiActions.showNotification({
          status: 'error',
          title: 'Error!',
          message: 'Sending cart data failed!'
        }));
      }
    };
    saveCartOnServer();
  }
}

