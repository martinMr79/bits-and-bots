import React from 'react';
import { useCart } from '../../hooks/useCart';
import { CartPageContainer } from '../../components/CartPage/styled';

const Cart = () => {
  const { cart, removeFromCart } = useCart();

  if (!cart || cart.length === 0) return <p>Your cart is empty.</p>;

  let totalPrice = 0;
  let totalDiscount = 0;

  cart.forEach(item => {
    if (item.sale_price) {
      totalPrice += parseFloat(item.sale_price);
      totalDiscount += parseFloat(item.regular_price) - parseFloat(item.sale_price);
    } else {
      totalPrice += parseFloat(item.price);
    }
  });

  let finalPrice = totalPrice - totalDiscount;

  return (
    <CartPageContainer>
      <h1>Your Cart</h1>
      <div className="cart-wrapper">
      <div className="cart-content">
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
                    <button onClick={() => removeFromCart(item.id)}>Remove</button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="summary-box">
        <h2>Summary</h2>
        <div className="summary-row">
          <p>Price: {totalPrice.toFixed(0)} Nok</p>
          <p>Discount: {totalDiscount.toFixed(0)} Nok</p>
          <hr></hr>
          <p>Total: {finalPrice.toFixed(0)} Nok</p>
        </div>
        <button>Checkout</button>
      </div>
    </div>  
    </CartPageContainer>
  );
};

export default Cart;


