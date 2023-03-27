// import styled from "styled-components";
import { Button, Input, Profileimg } from "../../../common";

export const SignupForm = () => {
  return (
    <>
      <div>
        <Profileimg>프로필이미지</Profileimg>
        <Button color={"color1"}>등록하기</Button>
      </div>
      <form>
        <Input placeholder="text1" />
        <span></span>
        <Input placeholder="text2" />
        <Input placeholder="text2" />
        <Input placeholder="text3" />
        <Input placeholder="text4" />
        <Input placeholder="text5" />
        <Button color={"color1"}>가입하기</Button>
        <Button color={"color1"}>뒤로가기</Button>
      </form>
    </>
  );
};
