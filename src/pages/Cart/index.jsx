import React from 'react';
import { useCart } from '../../hooks/useCart';
import { CartPageContainer } from '../../components/CartPage/styled';

const Cart = () => {
  const { cart, removeFromCart } = useCart();

  if (!cart || cart.length === 0) return <p>Your cart is empty.</p>;

  return (
    <CartPageContainer>
      <h1>Your Cart</h1>
      {cart.map((item) => (
  <div key={item.id}>
    <div className="row">
      <img src={item.images[0]?.src} alt={item.images[0]?.alt || 'product'} />
      <div className="info">
        <h2>{item.name}</h2>
        <p>Price: {item.price} Nok</p>
      </div>
    </div>
    <button onClick={() => removeFromCart(item.id)}>Remove from Cart</button>
  </div>
))}


    </CartPageContainer>
  );
};

export default Cart;

