import React from 'react';
import { useCart } from '../../hooks/useCart';
import { CartPageContainer } from '../../components/CartPage/styled';

const Cart = () => {
  const { cart, removeFromCart } = useCart();

  if (!cart || cart.length === 0) return <p>Your cart is empty.</p>;

  return (
    <CartPageContainer>
      <h1>Your Cart</h1>
      {cart.map((item) => {
  const onSale = item.sale_price;
  return (
    <div key={item.id}>
      <div className="row">
        <img src={item.images[0]?.src} alt={item.images[0]?.alt || 'product'} />
        <div className="info">
          <h2>{item.name}</h2>
          <div className="price-and-button">
            {onSale ? (
              <p>
                <s style={{ color: '#76777B', marginRight: '8px', fontSize: '16px' }}>
                  {item.regular_price} Nok
                </s>
                <span style={{ color: '#BEEB09', fontSize: '16px' }}>{item.sale_price} Nok</span>
              </p>
            ) : (
              <p style={{ fontSize: '16px' }}>{item.price} Nok</p>
            )}
            <button onClick={() => removeFromCart(item.id)}>Remove from Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
})}


    </CartPageContainer>
  );
};

export default Cart;

