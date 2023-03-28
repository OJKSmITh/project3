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

export const Right = () => {
  return (
    <RightWrap>
      <form>
        <Input placeholder="text1" />
        <Input placeholder="text3" />
        <Input placeholder="text4" />
        <Input placeholder="text5" />
        <div>
          <Button color={"color2"} textcolor={"color3"}>
            가입하기
          </Button>
          <Button color={"color2"} textcolor={"color3"}>
            뒤로가기
          </Button>
        </div>
      </form>
    </RightWrap>
  );
};
