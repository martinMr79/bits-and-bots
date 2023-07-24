import styled from 'styled-components';

const FooterWrapper = styled.footer`
  height: 115px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #27282E;
  color: white;
  width: 100%;
  text-align: center;
`;

const Footer = () => (
  <FooterWrapper>
    <p>Made by Martin Mroz</p>
  </FooterWrapper>
);

export default Footer;
