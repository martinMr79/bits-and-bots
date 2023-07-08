import React, { useState } from 'react';
import { RegisterForm, RegisterButton } from './styles';

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
            <input 
                type="email" 
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input 
                type="password" 
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <RegisterButton type="submit">Register</RegisterButton>
        </RegisterForm>
    );
}

export default Register;

