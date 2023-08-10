import React from 'react';
import { useCart } from '../../hooks/useCart';
import {
  CartPageContainer,
  CartPageWrapper,
  SummaryInnerContainer,
  EmptyCartMessage,
} from '../../components/CartPage/styled';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, removeFromCart } = useCart();

  if (!cart || cart.length === 0)
    return <EmptyCartMessage>Your cart is empty.</EmptyCartMessage>;

  let totalPrice = 0; // Represents the sum of all items at their regular price.
  let discount = 0; // Total amount saved from items on sale.

  cart.forEach((item) => {
    if (item.sale_price) {
      discount += parseFloat(item.regular_price) - parseFloat(item.sale_price);
      totalPrice += parseFloat(item.regular_price);
    } else {
      totalPrice += parseFloat(item.price);
    }
  });

  let finalPrice = totalPrice - discount;

  return (
    <CartPageWrapper>
      <CartPageContainer>
        <h1>Your Cart</h1>
        <div className="cart-wrapper">
          <div className="cart-content">
            {cart.map((item) => {
              const onSale = item.sale_price;
              return (
                <div key={item.id}>
                  <div className="row">
                    <img
                      src={item.images[0]?.src}
                      alt={item.images[0]?.alt || 'product'}
                    />
                    <div className="info">
                      <h2>{item.name}</h2>
                      <div className="price-and-button">
                        <div className="price-wrapper">
                          {onSale ? (
                            <>
                              <p
                                style={{
                                  textDecoration: 'line-through',
                                  color: '#76777B',
                                  marginRight: '8px',
                                  fontSize: '16px',
                                }}
                              >
                                NOK {item.regular_price}
                              </p>
                              <p style={{ color: '#BEEB09', fontSize: '16px' }}>

                              NOK {item.sale_price}
       
                              </p>
                            </>
                          ) : (
                            <p style={{ fontSize: '16px' }}>

                              NOK {item.price}{' '}
                
                            </p>
                          )}
                        </div>
                        <button onClick={() => removeFromCart(item.id)}>
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="summary-box">
            <SummaryInnerContainer>
              <h2>Summary</h2>
              <div className="summary-row">
                <p>
                  <span className="label">Price:</span> {totalPrice.toFixed(0)}{' '}
                  NOK
                </p>
                <p>
                  <span className="label">Discount:</span> {discount.toFixed(0)}{' '}
                  NOK
                </p>
                <hr />
                <p className="total">
                  <span className="label">Total:</span> {finalPrice.toFixed(0)}{' '}
                  NOK
                </p>
              </div>
              <Link to="/checkout">
                <button>Checkout</button>
              </Link>
            </SummaryInnerContainer>
          </div>
        </div>
      </CartPageContainer>
    </CartPageWrapper>
  );
};

export default Cart;
