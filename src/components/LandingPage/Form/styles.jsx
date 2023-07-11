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

  @media (max-width: 600px) {
    padding: 1rem;
    width: 280px;
  }
`;

export const SignUpButton = styled.button`
  color: #000;
  background: #ccff00;
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
  background-color: #27282e;
  color: #ffffff;
`;

export const StyledInput = styled.input`
  background: none;
  border: none;
  width: 100%;
  color: #ffffff;
  padding-left: 1rem;

  &::-webkit-input-placeholder {
    color: #ffffff;
  }
  &::-moz-placeholder {
    color: #ffffff;
  }
  &:-ms-input-placeholder {
    color: #ffffff;
  }
  &::-ms-input-placeholder {
    color: #ffffff;
  }
  &::placeholder {
    color: #ffffff;
  }

  &:focus {
    outline: none;
  }
`;

export const TabContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 428px;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const StyledParagraph = styled.p`
  color: white;

  button {
    color: #ccff00;
    background: none;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
  }

  button:hover {
    text-decoration: underline;
  }
`;

