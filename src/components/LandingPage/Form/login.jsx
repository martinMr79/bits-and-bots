import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {
    RegisterForm,
    SignUpButton,
    InputWrapper,
    StyledInput,
    TabContainer,
    StyledParagraph,
} from './styles';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const history = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Retrieve stored user from localStorage
    const storedUser = JSON.parse(localStorage.getItem('user'));

    // Validate inputs against stored user
    if (storedUser && storedUser.email === email && storedUser.password === password) {
      // If inputs match stored user, redirect to the browse page
      history.push('/browse');
    } else {
      // If inputs don't match stored user, show an error message
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
      <SignUpButton type="submit">Log In</SignUpButton>
      {errorMessage && <StyledParagraph>{errorMessage}</StyledParagraph>}
      <StyledParagraph>
        Don't have an account? <a href="">Sign up!</a>
      </StyledParagraph>
    </RegisterForm>
  );
};

export default Login;
