import styled from 'styled-components';

export const RegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  width: 300px;
  padding: 3rem;
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

export const InputField = styled.input`
  width: 100%;
  margin: 8px 0;
  
  border-radius: 8px;
  padding: 10px 0px;
  
`;

export const TabContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 396px;
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