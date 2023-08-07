import React, { useState } from 'react';
import { useCart } from '../../hooks/useCart';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const Checkout = () => {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();

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
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 2, width: '30ch' },
      }}
      onSubmit={handleFormSubmit}
      noValidate
      autoComplete="off"
    >
      <h2>You have {cart.length} items in your cart</h2>

      <TextField
        name="name"
        label="Name"
        value={formData.name}
        onChange={handleInputChange}
        required
        variant="standard"
      />
      
      <TextField
        name="address"
        label="Address"
        value={formData.address}
        onChange={handleInputChange}
        required
        variant="standard"
      />

      <TextField
        name="creditCard"
        label="Credit Card"
        value={formData.creditCard}
        onChange={handleInputChange}
        pattern="\d{4} \d{4} \d{4} \d{4}"
        helperText="Format: 1234 5678 9012 3456"
        required
        variant="standard"
      />

      <TextField
        name="expiryDate"
        label="Expiry Date"
        value={formData.expiryDate}
        onChange={handleInputChange}
        pattern="\d{2}/\d{2}"
        helperText="Format: MM/YY"
        required
        variant="standard"
      />

      <TextField
        name="cvv"
        label="CVV"
        value={formData.cvv}
        onChange={handleInputChange}
        pattern="\d{3}"
        helperText="3-digit code"
        required
        variant="standard"
      />

      <button type="submit">Submit</button>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
      >
        <h2>Confirm Payment</h2>
        <p>Do you want to proceed with the payment?</p>
        <button onClick={confirmPayment}>Confirm</button>
        <button onClick={closeModal}>Cancel</button>
      </Modal>
    </Box>
  );
};

export default Checkout;
