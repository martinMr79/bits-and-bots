import React, { useState } from 'react';
import { StyledTabs, StyledTab } from './tabStyles';
import {
  RegisterForm,
  SignUpButton,
  InputWrapper,
  StyledInput,
  TabContainer,
  StyledParagraph,
  ErrorMessage,
  SuccessMessage,
} from './styles';
import Login from './login';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [tabValue, setTabValue] = useState(0);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const validateForm = () => {
    setErrorMessage('');

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (email.trim() === '') {
        setErrorMessage('Email cannot be empty.');
        return false;
    }

    if (!emailRegex.test(email)) {
        setErrorMessage('Please enter a valid email address.');
        return false;
    }

    if (password.length < 8) {
      setErrorMessage('Password must be at least 8 characters long.');
      return false;
    }

    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match.');
      return false;
    }

    return true;
}; 

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
    setErrorMessage('');
    setSuccessMessage('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      const user = {
        email: email,
        password: password,
        initial: email.charAt(0).toUpperCase(),
      };
      localStorage.setItem('user', JSON.stringify(user));
      setSuccessMessage('Successfully registered! You can now log in.');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
    } catch (error) {
      setErrorMessage(
        'There was an error registering your account. Please try again later.', 
      );
    }
  };

  return (
    <>
      <TabContainer>
        <StyledTabs value={tabValue} onChange={handleTabChange}>
          <StyledTab label="Log In" />
          <StyledTab label="Sign Up" />
        </StyledTabs>
      </TabContainer>
      {tabValue === 0 ? (
        <Login setTabValue={setTabValue} />
      ) : (
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
          <InputWrapper>
            <StyledInput
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </InputWrapper>
          <SignUpButton type="submit">Sign up</SignUpButton>
          {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
          {successMessage && <SuccessMessage>{successMessage}</SuccessMessage>}
          <StyledParagraph>
            Already have an account?{' '}
            <button onClick={() => setTabValue(0)}>Log in!</button>
          </StyledParagraph>
        </RegisterForm>
      )}
    </>
  );
};

export default Register;
