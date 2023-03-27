import { HamburgerStyled } from './styled';

export const HamburgerButtonComponent = ({ onClick }) => (
  <HamburgerStyled onClick={onClick}>
    <span></span>
    <span></span>
    <span></span>
  </HamburgerStyled>
);
