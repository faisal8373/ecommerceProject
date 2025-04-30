import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const itemCount = cartItems.reduce((count, item) => count + item.quantity, 0);

  return (
    <header className="app-header">
      <Link to="/" className="logo">
        <h1>Paradise Nursery</h1>
      </Link>
      
      <nav>
        <Link to="/products">Products</Link>
        <Link to="/cart" className="cart-link">
          Cart ({itemCount})
        </Link>
      </nav>
    </header>
  );
};

export default Header;