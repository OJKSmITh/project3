import styled, {keyframes}  from 'styled-components';

const slideInRight = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;


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
export const SubMenu = styled.div`
  position: absolute;
  display:flex;
  flex-direction:column;
  text-decoration:none;
  font-size:25px;
  top: 60px;
  right: 0;
  width: 200px;
  height:300px;
  background-color: rgba(0, 0, 0, 0.85);;
  border-radius: 4px;
  padding: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.9);
  animation: ${slideInRight} 0.5s ease-in-out forwards;
  z-index:10;

  & > a {
    text-decoration:none;
    color:#fffdfd;
    &:hover{
      color:yellow;
    }
  }

  & > a:nth-child(2){
    margin-top:20px;
  }
  & > a:nth-child(3){
    margin-top:20px;
  }
  & > a:nth-child(4){
    margin-top:20px;
  }
`;

