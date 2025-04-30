import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../features/cart/CartSlice';
import Header from '../components/Header';
import './ProductPage.css'; // Create this CSS file for styling

// Sample plant data (could also be fetched from an API)
const plantsArray = [
  {
    id: 1,
    name: 'Snake Plant',
    image: 'https://images.unsplash.com/photo-1593483316242-efb5420596ca?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    description: 'Excellent air purifier, thrives in low light conditions.',
    cost: '$25',
    categories: ['air-purifying', 'low-light']
  },
  {
    id: 2,
    name: 'Peace Lily',
    image: 'https://images.unsplash.com/photo-1517191434949-5e90cd67d2b6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    description: 'Beautiful flowering plant that removes toxins from the air.',
    cost: '$35',
    categories: ['air-purifying', 'flowering']
  },
  {
    id: 3,
    name: 'Aloe Vera',
    image: 'https://images.unsplash.com/photo-1525201548942-d8732f6617a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    description: 'Healing properties and easy to care for.',
    cost: '$20',
    categories: ['medicinal', 'succulent']
  },
  {
    id: 4,
    name: 'Rubber Plant',
    image: 'https://images.unsplash.com/photo-1591958915259-d3a1e11a2a28?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    description: 'Sturdy plant with large, glossy leaves.',
    cost: '$30',
    categories: ['low-maintenance', 'decoration']
  },
  {
    id: 5,
    name: 'Spider Plant',
    image: 'https://images.unsplash.com/photo-1587846817436-1a8f4e1c1277?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    description: 'Produces baby plants that you can propagate.',
    cost: '$18',
    categories: ['air-purifying', 'easy-care']
  },
  {
    id: 6,
    name: 'ZZ Plant',
    image: 'https://images.unsplash.com/photo-1598880940080-ff9a29891b85?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    description: 'Nearly indestructible and drought-tolerant.',
    cost: '$28',
    categories: ['low-maintenance', 'low-light']
  }
];

const ProductPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Track which items are in cart
  const [addedToCart, setAddedToCart] = useState(
    plantsArray.reduce((acc, plant) => {
      acc[plant.id] = cartItems.some(item => item.id === plant.id);
      return acc;
    }, {})
  );

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedToCart({ ...addedToCart, [plant.id]: true });
  };

  const filteredPlants = plantsArray.filter(plant => {
    const matchesCategory = activeCategory === 'all' || 
                          plant.categories.includes(activeCategory);
    const matchesSearch = plant.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         plant.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const categories = [
    'all',
    'air-purifying',
    'low-maintenance',
    'flowering',
    'succulent',
    'low-light'
  ];

  return (
    <div className="product-page">
      <Header />
      
      <div className="product-controls">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search plants..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="category-filter">
          {categories.map(category => (
            <button
              key={category}
              className={activeCategory === category ? 'active' : ''}
              onClick={() => setActiveCategory(category)}
            >
              {category.split('-').join(' ')}
            </button>
          ))}
        </div>
      </div>

      <div className="product-grid">
        {filteredPlants.length > 0 ? (
          filteredPlants.map((plant) => (
            <div key={plant.id} className="plant-card">
              <img src={plant.image} alt={plant.name} />
              <div className="plant-info">
                <h3>{plant.name}</h3>
                <p className="description">{plant.description}</p>
                <p className="price">{plant.cost}</p>
                <button
                  onClick={() => handleAddToCart(plant)}
                  disabled={addedToCart[plant.id]}
                  className={addedToCart[plant.id] ? 'added' : ''}
                >
                  {addedToCart[plant.id] ? 'Added to Cart' : 'Add to Cart'}
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="no-results">
            <p>No plants found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductPage;