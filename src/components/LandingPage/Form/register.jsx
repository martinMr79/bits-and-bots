import React, { useState } from 'react';
import { StyledTabs, StyledTab } from './tabStyles'
import { RegisterForm, SignUpButton, InputField, TabContainer, StyledParagraph } from './styles';

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [tabValue, setTabValue] = useState(0);

    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // validate inputs and write to localStorage

        const user = {
            email: email,
            password: password
        }
        localStorage.setItem('user', JSON.stringify(user));
    }

    return (
      <>
        <TabContainer>
          <StyledTabs value={tabValue} onChange={handleTabChange}>
            <StyledTab label="Log In" />
            <StyledTab label="Sign Up" />
          </StyledTabs>
        </TabContainer>
        <RegisterForm onSubmit={handleSubmit}>
            <InputField 
                type="email" 
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <InputField 
                type="password" 
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <SignUpButton type="submit">Sign up</SignUpButton>
            <StyledParagraph>Already have an account? <a href="">Log in!</a></StyledParagraph>
        </RegisterForm>
      </>
    );
}

export default Register;

