import React, { useState } from 'react';
import { useCart } from '../../hooks/useCart';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { CheckOutPageContainer } from '../../components/CheckOut/styled';

const Checkout = () => {
    const { cart, clearCart } = useCart();
    const navigate = useNavigate();
  
    let totalPrice = 0;
    let discount = 0;
  
    cart.forEach((item) => {
      if (item.sale_price) {
        totalPrice += parseFloat(item.regular_price);
        discount += parseFloat(item.regular_price) - parseFloat(item.sale_price);
      } else {
        totalPrice += parseFloat(item.price);
      }
    });
  
    const finalPrice = totalPrice - discount;

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
    navigate("/");
  };

  return (
  <CheckOutPageContainer>
<Box
  component="form"
  sx={{
    display: 'flex',
    flexDirection: 'column', 
    alignItems: 'center',    
    gap: 2,                  
    '& .MuiTextField-root': {
      m: 1, 
      width: '30ch'
    },
  }}
  onSubmit={handleFormSubmit}
  noValidate
  autoComplete="off"
>



      <TextField
        name="creditCard"
        label="Credit Card"
        value={formData.creditCard}
        onChange={handleInputChange}
        pattern="\d{4} \d{4} \d{4} \d{4}"
        helperText="Format: 1234 5678 9012 3456"
        required
        variant="standard"

        sx={{ 

            '& .MuiInput-underline:before': { // default underline color
                borderBottomColor: 'white',
              },
              '& .MuiInput-underline:hover:not(.Mui-disabled):before': { // hover underline color
                borderBottomColor: 'white',
              },
              '& .MuiInput-underline:after': { // focused underline color
                borderBottomColor: 'white',
              },

            '& .MuiInputLabel-root': {
              color: 'white',  // replace 'desiredColor' with your color
            },
          }}
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

        sx={{ 

            '& .MuiInput-underline:before': { // default underline color
                borderBottomColor: 'white',
              },
              '& .MuiInput-underline:hover:not(.Mui-disabled):before': { // hover underline color
                borderBottomColor: 'white',
              },
              '& .MuiInput-underline:after': { // focused underline color
                borderBottomColor: 'white',
              },

            '& .MuiInputLabel-root': {
              color: 'white',  // replace 'desiredColor' with your color
            },
          }}
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

        sx={{ 

            '& .MuiInput-underline:before': { // default underline color
                borderBottomColor: 'white',
              },
              '& .MuiInput-underline:hover:not(.Mui-disabled):before': { // hover underline color
                borderBottomColor: 'white',
              },
              '& .MuiInput-underline:after': { // focused underline color
                borderBottomColor: 'white',
              },

            '& .MuiInputLabel-root': {
              color: 'white',  // replace 'desiredColor' with your color
            },
          }}
      />

      <TextField
        name="name"
        label="Name"
        value={formData.name}
        onChange={handleInputChange}
        required
        variant="standard"

        sx={{ 

            '& .MuiInput-underline:before': { // default underline color
                borderBottomColor: 'white',
              },
              '& .MuiInput-underline:hover:not(.Mui-disabled):before': { // hover underline color
                borderBottomColor: 'white',
              },
              '& .MuiInput-underline:after': { // focused underline color
                borderBottomColor: 'white',
              },

            '& .MuiInputLabel-root': {
              color: 'white',  // replace 'desiredColor' with your color
            },
          }}
      />
      
      <TextField
        name="address"
        label="Address"
        value={formData.address}
        onChange={handleInputChange}
        required
        variant="standard"

        sx={{ 

            '& .MuiInput-underline:before': { // default underline color
                borderBottomColor: 'white',
              },
              '& .MuiInput-underline:hover:not(.Mui-disabled):before': { // hover underline color
                borderBottomColor: 'white',
              },
              '& .MuiInput-underline:after': { // focused underline color
                borderBottomColor: 'white',
              },

            '& .MuiInputLabel-root': {
              color: 'white',  // replace 'desiredColor' with your color
            },
          }}
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
        <p>Total Items {cart.length}</p>
        <p>Original Price: {totalPrice.toFixed(2)} Nok</p>
        <p>Discount: {discount.toFixed(2)} Nok</p>
        <p>Total price after discount: {finalPrice.toFixed(2)} Nok</p>
    </Box>

    </CheckOutPageContainer>    
  );
};

export default Checkout;
