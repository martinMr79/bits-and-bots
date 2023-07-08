import React, { useState } from 'react';
import { RegisterForm, SignUpButton, InputField } from './styles';

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

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
          <p>Already have an account? <a href="">Log in!</a></p>
      </RegisterForm>
  );
}

export default Register;

