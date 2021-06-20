import { useSelector } from 'react-redux';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
  const items = useSelector(state => state.cart.items);
  return (
    <Card className={classes.cart}>
      <h2>{items.length ? 'Your Shopping Cart' : 'Your Shopping Cart is empty'}</h2>
      <ul>
        {items.map(item => <CartItem key = {item.id} item = {item}/>)}
      </ul>
    </Card>
  );
};

export default Cart;
