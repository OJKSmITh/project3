import styled from "styled-components";
import { Button, SocialLink, Input } from "../../../common";

export const Left = styled.form`
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

  & > h1 {
    font-weight: bold;
    margin: 0;
    color: #000;
  }
`;

export const Span = styled.span`
  font-size: 12px;
  color: #000;
  letter-spacing: 0.5px;
  margin-bottom: 10px;
`;

export const SigninForm = () => {
  return (
    <Left>
      <h1>Sign In</h1>
      <SocialLink>
        <div>
          <a href="#">
            <i aria-hidden="true">F</i>
          </a>
        </div>
        <div>
          <a href="#">
            <i aria-hidden="true">G</i>
          </a>
        </div>
        <div>
          <a href="#">
            <i aria-hidden="true">N</i>
          </a>
        </div>
      </SocialLink>
      <Span>or use your account</Span>
      <Input placeholder="text1" />
      <Input placeholder="text2" />
      <Button color={"color1"}>Sign In</Button>
    </Left>
  );
};
