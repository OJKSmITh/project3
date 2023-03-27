import styled from "styled-components";

export const SocialLink = styled.div`
  margin: 20px 0;

  & > div {
    width: 40px;
    height: 40px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin: 0 5px;
    border-radius: 50%;
    box-shadow: -5px -5px 10px #fff, 5px 5px 8px #babebc;
    cursor: pointer;
  }

  & > div:active {
    box-shadow: inset 1px 1px 2px #babebc, inset -1px -1px 2px #fff;
  }

  & > div > a {
    color: #000;
  }
`;
