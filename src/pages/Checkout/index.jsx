import React, { useState } from 'react';
import { useCart } from '../../hooks/useCart';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';

const Checkout = () => {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();
  
  // Modal state and functions
  const [isModalOpen, setIsModalOpen] = useState(false);
  const closeModal = () => setIsModalOpen(false);
  const openModal = () => setIsModalOpen(true);

  const [formData, setFormData] = useState({
    name: '',
    address: '',
    creditCard: '',
    expiryDate: '',
    cvv: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    openModal();
  };

  const confirmPayment = () => {
    closeModal();
    clearCart();
    navigate("/browse");
  };

  return (
    <div>
      <h2>You have {cart.length} items in your cart</h2>
      <form onSubmit={handleFormSubmit}>
        <label>
          Credit Card:
          <input
            type="text"
            name="creditCard"
            value={formData.creditCard}
            onChange={handleInputChange}
            pattern="\d{4} \d{4} \d{4} \d{4}"
            required
          />
        </label>
        <label>
          Expiry Date (MM/YY):
          <input
            type="text"
            name="expiryDate"
            value={formData.expiryDate}
            onChange={handleInputChange}
            pattern="\d{2}/\d{2}"
            required
          />
        </label>
        <label>
          CVV:
          <input
            type="text"
            name="cvv"
            value={formData.cvv}
            onChange={handleInputChange}
            pattern="\d{3}"
            required
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
      >
        <h2>Confirm Payment</h2>
        <p>Do you want to proceed with the payment?</p>
        <button onClick={confirmPayment}>Confirm</button>
        <button onClick={closeModal}>Cancel</button>
      </Modal>
    </div>
  );
};

export default Checkout;



