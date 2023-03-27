import styled from "styled-components";

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
`;

export const Right = () => {
  return <RightWrap></RightWrap>;
};
