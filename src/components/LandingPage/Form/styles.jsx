import styled from 'styled-components';
import { colors } from '../../../styles/theme';
import { flexCenter } from '../../../styles/mix-ins';

export const RegisterForm = styled.form`
  ${flexCenter}
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
  color: ${colors.black};
  background: ${colors.secondary};
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
  background-color: ${colors.primary};
  color: ${colors.white};
`;

export const StyledInput = styled.input`
  background: none;
  border: none;
  width: 100%;
  color: ${colors.white};
  padding-left: 1rem;

  &::-webkit-input-placeholder,
  &::-moz-placeholder,
  &:-ms-input-placeholder,
  &::-ms-input-placeholder,
  &::placeholder {
    color: ${colors.white};
  }

  &:focus {
    outline: none;
  }

  &:-webkit-autofill {
    -webkit-text-fill-color: ${colors.white} !important;
    background-color: ${colors.primary} !important;
    border: none !important;
    width: auto !important;
    box-shadow: none !important;
    -webkit-box-shadow: 0 0 0 30px ${colors.primary} inset !important;


  }

  &:-webkit-autofill:focus,
  &:-webkit-autofill:focus:hover,
  &:-webkit-autofill:focus:active {
    -webkit-text-fill-color: ${colors.white} !important;
    background-color: ${colors.primary} !important;

    -webkit-box-shadow: 0 0 0 30px ${colors.primary} inset !important;
  }

  &:-webkit-autofill:hover {
    -webkit-text-fill-color: ${colors.white} !important;
    background-color: ${colors.primary} !important;
    -webkit-box-shadow: 0 0 0 30px ${colors.primary} inset !important;
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
    color: ${colors.secondary};
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

export const SuccessMessage = styled.p`
  color: ${colors.secondary};
`;

export const ErrorMessage = styled.p`
  color: ${colors.secondary};
`;

export const Spacer = styled.div`
  height: 48px;
`;
