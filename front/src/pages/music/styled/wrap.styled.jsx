import styled from "styled-components";

export const Wrap = styled.div`
  width: 100%;
  height: 1080px;
  display: flex;
  justify-content: center;

  & > div:nth-child(1) {
    margin-right: 20px;
    justify-content: flex-end;
  }

  & > div:nth-child(3) {
    margin-left: 20px;
    justify-content: flex-start;
  }
`;
