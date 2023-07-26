import styled from 'styled-components';
import { colors } from '../../styles/theme';
import { flexCenter } from '../../styles/mix-ins';

const FooterWrapper = styled.footer`
  height: 115px;
  ${flexCenter}
  background-color: ${colors.primary};
  color: ${colors.white};
  width: 100%;
  text-align: center;
`;

const Footer = () => (
  <FooterWrapper>
    <p>Made by Martin Mroz</p>
  </FooterWrapper>
);

export default Footer;
