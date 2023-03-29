import styled from "styled-components";

export const Profileimg = styled.div`
  margin-top: 30px;
  width: 150px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  box-shadow: -5px -5px 10px #fff, 5px 5px 8px #babebc;
  cursor: pointer;
  overflow:hidden;
  margin:0 auto;

  & > img {
    width:100%;
    height:100%;
    object-fit:cover;
  }
`;
