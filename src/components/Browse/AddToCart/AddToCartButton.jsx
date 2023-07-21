import React, { useState } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { CartButton } from '../cardLayout';

const AddToCartButton = ({ product, onToggleCart }) => {
  const [isInCart, setIsInCart] = useState(false);

  const handleToggleCart = () => {

    const cartData = JSON.parse(localStorage.getItem('cart')) || [];
    const isInCart = cartData.some((item) => item.id === product.id);


    if (isInCart) {
      const updatedCart = cartData.filter((item) => item.id !== product.id);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
    } else {
      const updatedCart = [...cartData, product];
      localStorage.setItem('cart', JSON.stringify(updatedCart));
    }


    setIsInCart(!isInCart);


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
