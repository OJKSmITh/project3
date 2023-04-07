import styled from "styled-components";
import { Input, Button } from "../../../common";

export const RightWrap = styled.div`
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

  & > form > div {
    display: flex;
    justify-content: center;
  }

  & > form > div > button {
    padding: 10px 20px;
  }

  & > form > input:nth-child(4) {
    height: 100px;
  }
`;

export const Right = ({user}) => {
  console.log(user)
  return (
    <RightWrap>
      <form onSubmit={(e)=>e.preventDefault()}>
        <Input value={user.email || ""} state="disabled"/>
        <Input value={user.nickname || ""} state="disabled"/>
        <Input value={user.phoneNumber || ""} state="disabled"/>
        <Input value={user.introduce || "소개를 입력해주세요."} state="disabled"/>
        <div>
          <Button onClick={()=>window.location.href='/profile/modify'} color={"color2"} textcolor={"color3"}>
            수정하기
          </Button>
          <Button onClick={()=>window.location.href='/'} color={"color2"} textcolor={"color3"}>
            뒤로가기
          </Button>
        </div>
      </form>
    </RightWrap>
  );
};
