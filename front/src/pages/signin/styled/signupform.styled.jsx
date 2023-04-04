import styled from "styled-components";
import Logo from "../../../common/images/Logo.png";
import { Button } from "../../../common";
import { NavLink } from 'react-router-dom';

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px 20px;
  box-sizing: border-box;
  align-items: center;
  position: absolute;
  right: 0;
  width: 50%;
  height: 100%;
  background-color: #a6b8c4;
  color: #fff;
  transition: all 0.5s;

  & > div {
    background-image: url(${Logo});
    background-position: center;
    background-size: cover;
    width: 200px;
    height: 150px;
    box-sizing: border-box;
  }

  & > h1 {
    padding-top: 10px;
    box-sizing: border-box;
  }

  & > p {
    padding-top: 20px;
    box-sizing: border-box;
  }
`;

export const SignupForm = () => {
  return (
    <Right>
      <div></div>
      <h1>Hello, Friend</h1>
      <p>아직 회원이 아니신가요?</p>
      <p>회원가입을 진행해주세요!</p>
      <NavLink to="/signup"> 
        <Button color={"color2"} textcolor={"color3"}>
          Sign Up
        </Button>
      </NavLink>
    </Right>
  );
};
