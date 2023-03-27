import styled from "styled-components";
import { Profileimg } from "../../../common";

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
`;

export const Left = () => {
  return (
    <>
      <LeftWrap>
        <Profileimg></Profileimg>
      </LeftWrap>
    </>
  );
};
