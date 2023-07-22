import React, { useState, useEffect } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { CartButton } from '../cardLayout';

const AddToCartButton = ({ product, onToggleCart }) => {
  const [isInCart, setIsInCart] = useState(false);
  const [cartData, setCartData] = useState([]);

  // Load cart data from local storage on mount
  useEffect(() => {
    const storedCartData = JSON.parse(localStorage.getItem('cart')) || [];
    setCartData(storedCartData);
  }, []);

  // Update the 'isInCart' state based on the cart items
  useEffect(() => {
    setIsInCart(cartData.some((item) => item.id === product.id));
  }, [cartData, product]);

  const handleToggleCart = () => {
    let updatedCart;

    if (isInCart) {
      updatedCart = cartData.filter((item) => item.id !== product.id);
    } else {
      updatedCart = [...cartData, product];
    }

    localStorage.setItem('cart', JSON.stringify(updatedCart));

    // Update the cartData state to trigger the effect that updates isInCart
    setCartData(updatedCart);

    onToggleCart(product);
  };

  return (
    <CartButton onClick={handleToggleCart}>
      <ShoppingCartIcon style={{ fontSize: '14px', marginRight: '8px' }} />
      {isInCart ? 'In Cart' : 'Add to Cart'}
    </CartButton>
  );
};

export default AddToCartButton;

