import styled from "styled-components";
import { Profileimg, Input, Button } from "../../../common";
import Logo from "../../../common/images/Logo.png";
import request from '../../../lib/request'

export const LeftWrap = styled.div`
  position: absolute;
  left: 0;
  width: 50%;
  height: 100%;
  transition: all 0.5s;
  box-sizing: border-box;
  background: #e9edf1;
  display: flex;
  flex-direction: column;
  padding: 0 50px;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;

  & > Button {
    margin-top: 30px;
    padding: 10px 20px;
  }

  & > input {
    margin-top: 10px;
    height: 140px;
  }

  & .logo {
    background-image: url(${Logo});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 200px;
    height: 150px;
    box-sizing: border-box;
  }
`;

export const Left = () => {



  return (
    <>
      <LeftWrap>
        <div className="logo"></div>
        <Profileimg id="profileImg"></Profileimg>
        <Button color={"color1"}>등록하기</Button>
      </LeftWrap>
    </>
  );
};
