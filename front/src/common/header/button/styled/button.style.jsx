import styled from "styled-components";

export const MainButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  background-color: black;
  width: 250px;
  height: 65px;
  color: white;
  border-radius: 100px;
  cursor: pointer;

  & > a > div {
    color: #fff;
  }
`;
