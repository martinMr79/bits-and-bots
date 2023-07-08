import styled from 'styled-components';

export const RegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 300px;
  background: rgba(39, 40, 46, 0.7);
  padding: 20px;
  border-radius: 5px;
`;

export const SignUpButton = styled.button`
  color: #000;
  background: #CCFF00;
  border: none;
  padding: 10px 20px;
  margin-top: 10px;
  cursor: pointer;
  width: 100%;
  border-radius: 8px; 
`;

export const InputField = styled.input`
  width: 100%;
  margin: 5px 0;
  padding: 8px;
  border-radius: 8px;
`;