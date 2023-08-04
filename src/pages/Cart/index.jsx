import React from 'react';
import { useCart } from '../../hooks/useCart';

const Cart = () => {
  const { cartItems, removeFromCart, addToCart } = useCart();
  console.log(addToCart);

  if (!cartItems || cartItems.length === 0) return <p>Your cart is empty.</p>;


  return (
    <div>
      <h1>Your Cart</h1>
      {cartItems.map((item) => (
        <div key={item.id}>
          <img src={item.images[0]?.src} alt={item.images[0]?.alt || 'product'} />
          <h2>{item.name}</h2>
          <p>Price: {item.price} Nok</p>
          <button onClick={() => removeFromCart(item.id)}>Remove from Cart</button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
