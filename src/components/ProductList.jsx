import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../features/cart/CartSlice';

const plantsArray = [
  {
    name: 'Snake Plant',
    image: 'snake-plant.jpg',
    description: 'Purifies air, low maintenance',
    cost: '$25',
    categories: ['air-purifying', 'low-light']
  },
  // More plant objects...
];

const ProductList = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const [addedToCart, setAddedToCart] = useState({});

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedToCart({ ...addedToCart, [plant.name]: true });
  };

  return (
    <div className="product-page">
      <div className="product-grid">
        {plantsArray.map((plant) => (
          <div key={plant.name} className="plant-card">
            <img src={plant.image} alt={plant.name} />
            <h3>{plant.name}</h3>
            <p>{plant.description}</p>
            <p className="price">{plant.cost}</p>
            <button
              onClick={() => handleAddToCart(plant)}
              disabled={addedToCart[plant.name]}
            >
              {addedToCart[plant.name] ? 'Added to Cart' : 'Add to Cart'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;