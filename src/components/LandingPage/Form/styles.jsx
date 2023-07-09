import styled from 'styled-components';

export const RegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  width: 300px;
  padding: 4rem;
  background: rgba(39, 40, 46, 0.7);
  border-radius: 0 0 5px 5px; 
`;

export const SignUpButton = styled.button`
  color: #000;
  background: #CCFF00;
  border: none;
  padding: 10px 20px;
  margin-top: 10px;
  cursor: pointer;
  width: 100%;
  border-radius: 5px; 
`;


export const InputWrapper = styled.div`
  width: 100%;
  margin: 5px 0;
  border-radius: 8px;
  padding: 10px 0px;
  background-color: #27282E;
  color: #FFFFFF;
`;

export const StyledInput = styled.input`
  background: none;
  border: none;
  width: 100%;
  color: #FFFFFF;
  padding-left: 1rem;

  &::-webkit-input-placeholder {
    color: #FFFFFF;
  }
  &::-moz-placeholder {
    color: #FFFFFF;
  }
  &:-ms-input-placeholder {
    color: #FFFFFF;
  }
  &::-ms-input-placeholder {
    color: #FFFFFF;
  }
  &::placeholder {
    color: #FFFFFF;
  }

  &:focus {
    outline: none;
  }
`;



export const TabContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 428px;
`;

export const StyledParagraph = styled.p`
  color: white;

  a {
    color: #CCFF00;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`;