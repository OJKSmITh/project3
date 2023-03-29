// import styled from "styled-components";
import { Button, Input, Profileimg } from "../../../common";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const request = axios.create({
  baseURL: "http://localhost:3001",
});

export const SignupForm = () => {
  // const dispatch = useDispatch();
  // const { isLogin } = useSelector((state) => state.user);

  // const signinAction = () => {
  //   dispatch({ type: "USER/LOGIN" });
  // };

  const submitHandler = async (e) => {
    e.preventDefault();
    const { email, userpw, nickname } = e.target;
    console.log(e.target);
    console.log(email, userpw, nickname);
    const response = await request.post("/user", {
      email: email.value,
      userpw: userpw.value,
      nickname: nickname.value,
    });
    Navigate("/");
  };

  return (
    <>
      <div>
        <Profileimg>프로필이미지</Profileimg>
        <Button color={"color1"}>등록하기</Button>
      </div>
      <form onSubmit={submitHandler}>
        <Input placeholder="text1" name="email" />
        <Input placeholder="text2" name="userpw" type="password" />
        <Input placeholder="text2" />
        <Input placeholder="text3" name="nickname" />
        <Input placeholder="text4" name="phoneNumber" />
        <Input placeholder="text5" name="introduce" />
        <Button color={"color1"}>가입하기</Button>
        <Button color={"color1"}>뒤로가기</Button>
      </form>
    </>
  );
};
