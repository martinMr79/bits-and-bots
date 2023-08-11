import React, { useState } from 'react';
import { useCart } from '../../hooks/useCart';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { CheckOutPageContainer, StyledModal, ConfirmButton, CancelButton, CenteredContainer } from '../../components/CheckOut/styled';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const Checkout = () => {
  const { cart } = useCart();
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
  const openModal = () => setIsModalOpen(true);
  const [transactionCompleted, setTransactionCompleted] = useState(false);
  const closeModal = () => {
    setIsModalOpen(false);
    setTransactionCompleted(false);
  };

  const [formData, setFormData] = useState({
    name: '',
    address: '',
    creditCard: '',
    expiryDate: '',
    cvv: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    let formattedValue = value;

    if (name === 'creditCard') {
      // Remove all non-digit characters
      const cleanedValue = value.replace(/\D+/g, '');

      // Add a space after every 4 digits
      formattedValue = cleanedValue.replace(/(\d{4})(?=\d)/g, '$1 ');

      // Limit to 16 digits + 3 spaces = 19 characters
      if (formattedValue.length > 19) {
        formattedValue = formattedValue.slice(0, 19);
      }
    }

    if (name === 'cvv' && /[^0-9]/.test(value)) {
      return; // exit the function early if non-digit character entered for CVV
    }

    if (name === 'expiryDate') {
      // Remove all non-digit characters
      const cleanedValue = value.replace(/\D+/g, '');

      // Add a slash after 2 digits
      formattedValue = cleanedValue.replace(/(\d{2})(?=\d)/g, '$1/');

      // Limit to 4 digits + 1 slash = 5 characters
      if (formattedValue.length > 5) {
        formattedValue = formattedValue.slice(0, 5);
      }
    }

    setFormData((prevData) => ({
      ...prevData,
      [name]: formattedValue,
    }));
  };

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let formErrors = {};

    if (!formData) return { error: 'Form data is missing.' };

    const creditCardPattern = /^\d{4} \d{4} \d{4} \d{4}$/;
    const expiryDatePattern = /^(0[1-9]|1[0-2])\/\d{2}$/;
    const cvvPattern = /^\d{3}$/;
    const namePattern = /^[a-zA-Z\s'-]{3,}$/; // Allow letters, spaces, hyphens, and apostrophes
    const addressPattern = /^[\w\s'-]{10,}$/; // Allow letters, numbers, spaces, hyphens, and apostrophes

    if (!creditCardPattern.test(formData.creditCard)) {
      formErrors.creditCard =
        'Credit Card format should be: 1234 5678 9012 3456';
    }

    if (!expiryDatePattern.test(formData.expiryDate)) {
      formErrors.expiryDate = 'Expiry Date format should be: MM/YY';
    } else {
      let [month, year] = formData.expiryDate.split('/');
      const expiryDateObject = new Date(`20${year}`, month - 1);
      const currentDateObject = new Date();
      currentDateObject.setHours(0, 0, 0, 0);

      if (expiryDateObject < currentDateObject) {
        formErrors.expiryDate = 'Please enter a valid expiry date.';
      }
    }

    if (!cvvPattern.test(formData.cvv)) {
      formErrors.cvv = 'CVV should be 3 digits';
    }

    if (!namePattern.test(formData.name)) {
      formErrors.name =
        'Name must be at least 3 characters long and should not contain any special characters';
    }

    if (!addressPattern.test(formData.address)) {
      formErrors.address =
        'Address must be at least 10 characters long and should not contain any special characters';
    }

    return formErrors;
  };

  const overlayStyles = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.75)',
      zIndex: 1000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const formErrors = validateForm();
  
    if (Object.keys(formErrors).length === 0) {
      openModal();
    } else {
      setErrors(formErrors);
    }
  };
  

  const confirmPayment = () => {
    setTimeout(() => {
      setTransactionCompleted(true);
      setTimeout(() => {
        closeModal();
        localStorage.removeItem('cart');
        navigate('/browse');
      }, 2000);
    }, 1000);
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
            width: '30ch',
          },
        }}
        onSubmit={handleFormSubmit}
        noValidate
        autoComplete="off"
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            marginBottom: '20px',
          }}
        >
          <p>Total Items {cart.length}</p>
          <p>Total price: kr {finalPrice.toFixed(0)}</p>
        </div>

        <TextField
          name="creditCard"
          label="Credit Card"
          value={formData.creditCard}
          onChange={handleInputChange}
          pattern="\d{4} \d{4} \d{4} \d{4}"
          error={!!errors.creditCard}
          helperText={errors.creditCard || 'Format: 1234 5678 9012 3456'}
          required
          variant="standard"
          sx={{
            '& .MuiInputBase-input': {
              color: 'white',
            },

            '& .MuiInput-underline:before': {
              // default underline color
              borderBottomColor: 'white',
            },
            '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
              // hover underline color
              borderBottomColor: 'white',
            },
            '& .MuiInput-underline:after': {
              // focused underline color
              borderBottomColor: 'white',
            },

            '& .MuiInputLabel-root': {
              color: 'white', // replace 'desiredColor' with your color
            },

            '& .MuiInputLabel-root.Mui-focused': {
              color: '#2177EB', // Focused label color
            },
          }}
        />

        <TextField
          name="expiryDate"
          label="Expiry Date"
          value={formData.expiryDate}
          onChange={handleInputChange}
          pattern="\d{2}/\d{2}"
          error={!!errors.expiryDate}
          helperText={errors.expiryDate || 'Format: MM/YY'}
          required
          variant="standard"
          sx={{
            '& .MuiInputBase-input': {
              color: 'white',
            },

            '& .MuiInput-underline:before': {
              borderBottomColor: 'white',
            },
            '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
              borderBottomColor: 'white',
            },
            '& .MuiInput-underline:after': {
              borderBottomColor: 'white',
            },

            '& .MuiInputLabel-root': {
              color: 'white',
            },

            '& .MuiInputLabel-root.Mui-focused': {
              color: '#2177EB',
            },
          }}
        />

        <TextField
          name="cvv"
          label="CVV"
          value={formData.cvv}
          onChange={handleInputChange}
          pattern="\d{3}"
          error={!!errors.cvv}
          helperText={errors.cvv || 'CVV should be 3 digits'}
          required
          variant="standard"
          inputProps={{ maxLength: 3 }}
          sx={{
            '& .MuiInputBase-input': {
              color: 'white',
            },

            '& .MuiInput-underline:before': {
              borderBottomColor: 'white',
            },
            '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
              borderBottomColor: 'white',
            },
            '& .MuiInput-underline:after': {
              borderBottomColor: 'white',
            },

            '& .MuiInputLabel-root': {
              color: 'white',
            },

            '& .MuiInputLabel-root.Mui-focused': {
              color: '#2177EB',
            },
          }}
        />

        <TextField
          name="name"
          label="Name"
          value={formData.name}
          onChange={handleInputChange}
          error={!!errors.name}
          helperText={errors.name || 'Name is required'}
          required
          variant="standard"
          sx={{
            '& .MuiInputBase-input': {
              color: 'white',
            },

            '& .MuiInput-underline:before': {
              borderBottomColor: 'white',
            },
            '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
              borderBottomColor: 'white',
            },
            '& .MuiInput-underline:after': {
              borderBottomColor: 'white',
            },

            '& .MuiInputLabel-root': {
              color: 'white',
            },

            '& .MuiInputLabel-root.Mui-focused': {
              color: '#2177EB',
            },
          }}
        />

        <TextField
          name="address"
          label="Address"
          value={formData.address}
          onChange={handleInputChange}
          error={!!errors.address}
          helperText={errors.address || 'Address is required'}
          required
          variant="standard"
          sx={{
            '& .MuiInputBase-input': {
              color: 'white',
            },

            '& .MuiInput-underline:before': {
              borderBottomColor: 'white',
            },
            '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
              borderBottomColor: 'white',
            },
            '& .MuiInput-underline:after': {
              borderBottomColor: 'white',
            },

            '& .MuiInputLabel-root': {
              color: 'white',
            },

            '& .MuiInputLabel-root.Mui-focused': {
              color: '#2177EB',
            },
          }}
        />

        <button type="submit">Submit</button>
        
        <StyledModal  
  isOpen={isModalOpen}
  onRequestClose={closeModal}
  style={overlayStyles}
>
  {!transactionCompleted ? (
    <>
      <h2>Confirm Payment</h2>
      <p>Do you want to proceed with the payment?</p>
      <ConfirmButton onClick={confirmPayment}>Confirm</ConfirmButton>
      <CancelButton onClick={closeModal}>Cancel</CancelButton>
    </>
  ) : (
<CenteredContainer>
    <CheckCircleOutlineIcon color="primary" style={{ fontSize: 80 }} />
    <p>Transaction completed</p>
</CenteredContainer>
  )}
</StyledModal>


      </Box>
    </CheckOutPageContainer>
  );
};

export default Checkout;
