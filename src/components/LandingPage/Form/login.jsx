import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  RegisterForm,
  SignUpButton,
  InputWrapper,
  StyledInput,
  StyledParagraph,
  ErrorMessage,
  Spacer,
} from './styles';

const Login = ({ setTabValue }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Retrieve stored user from localStorage
    const storedUser = JSON.parse(localStorage.getItem('user'));

    // Validate inputs against stored user
    if (
      storedUser &&
      storedUser.email === email &&
      storedUser.password === password
    ) {
      localStorage.setItem('loggedInUserInitial', storedUser.initial);  // Setting the initial
      navigate('/browse');
    } else {
      
      setErrorMessage('Incorrect username or password');
    }
  };

  return (
    <RegisterForm onSubmit={handleSubmit}>
      
      <InputWrapper>
        <StyledInput
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </InputWrapper>
      
      <InputWrapper>
        <StyledInput
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </InputWrapper>
      <Spacer />
      <SignUpButton type="submit">Log In</SignUpButton>
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      <StyledParagraph>
        Don't have an account?{' '}
        <button onClick={() => setTabValue(1)}>Sign up!</button>
      </StyledParagraph>
    </RegisterForm>
  );
};

export default Login;
