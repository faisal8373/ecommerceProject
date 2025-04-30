import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from '../components/CartItem';
import { useNavigate } from 'react-router-dom';

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const navigate = useNavigate();

  const calculateTotalAmount = () => {
    return cartItems.reduce((total, item) => {
      const price = parseFloat(item.cost.substring(1));
      return total + price * item.quantity;
    }, 0).toFixed(2);
  };

  const handleContinueShopping = () => {
    navigate('/products');
  };

  const handleCheckout = () => {
    alert('Checkout functionality will be added later!');
  };

  return (
    <div className="cart-page">
      <h2>Your Shopping Cart</h2>
      
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map((item) => (
              <CartItem 
                key={item.name} 
                item={item} 
              />
            ))}
          </div>
          
          <div className="cart-summary">
            <h3>Total: ${calculateTotalAmount()}</h3>
            <p>{cartItems.reduce((acc, item) => acc + item.quantity, 0)} items</p>
            
            <div className="cart-actions">
              <button onClick={handleContinueShopping}>
                Continue Shopping
              </button>
              <button onClick={handleCheckout}>
                Proceed to Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;