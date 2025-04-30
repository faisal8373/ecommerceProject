import React from 'react';
import { useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from '../features/cart/CartSlice';

const CartItem = ({ item, onContinueShopping }) => {
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(updateQuantity({ 
      name: item.name, 
      amount: item.quantity + 1 
    }));
  };

  const handleDecrement = () => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ 
        name: item.name, 
        amount: item.quantity - 1 
      }));
    } else {
      dispatch(removeItem(item.name));
    }
  };

  const handleRemove = () => {
    dispatch(removeItem(item.name));
  };

  const calculateTotalCost = () => {
    const price = parseFloat(item.cost.substring(1));
    return (price * item.quantity).toFixed(2);
  };

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} />
      <div className="item-details">
        <h3>{item.name}</h3>
        <p>{item.cost} each</p>
      </div>
      <div className="quantity-controls">
        <button onClick={handleDecrement}>-</button>
        <span>{item.quantity}</span>
        <button onClick={handleIncrement}>+</button>
      </div>
      <div className="item-total">
        <p>${calculateTotalCost()}</p>
        <button onClick={handleRemove}>Remove</button>
      </div>
    </div>
  );
};

export default CartItem;