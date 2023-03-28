import styled from 'styled-components';

export const HamburgerStyled = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 45px;
  height: 45px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  box-sizing: border-box;

  &:focus {
    outline: none;
  }

  & > span {
    width: 100%;
    height: 3px;
    background-color: #333;
  }

`