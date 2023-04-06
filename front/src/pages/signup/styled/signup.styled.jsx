import styled from "styled-components";
import { Button, Input, Profileimg } from "../../../common";
import request from "../../../lib/request";
import {useDispatch, useSelector} from 'react-redux';
import { ModalChang } from './modal.styled';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';


import { ModalChang } from "./modal.styled";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export const SignupForm = () => {
  const dispatch = useDispatch();
  const { authCheck } = useSelector((state) => state.email);
  const [email, setEmail] = useState("");

  const imgSubmit = async (e) => {
    e.preventDefault();
    console.log("imgSubmit");
    const body = new FormData(e.target);
    const response = await request.post("/user/single", body, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    console.log("res", response);

    const previewImg = document.querySelector("#previewImg");
    previewImg.src = `http://127.0.0.1:3001/${response.data.filename}`;
  }


  const signupSubmit = async (e) => {
    e.preventDefault();
    const previewImg = document.querySelector("#previewImg");
    const inputImg = document.querySelector("#inputImg");
    console.log("prev:", previewImg.src);
    inputImg.src = previewImg.src.split("/")[3];
    const { userImg, email, userpw, nickname, phoneNumber, introduce } =
      e.target;
    const body = {
      userImg: userImg.value,
      email: email.value,
      userpw: userpw.value,
      nickname: nickname.value,
      phoneNumber: phoneNumber.value,
      introduce: introduce.value,
    };
    const response = await request.post("/user/signup", body);
    window.location.href = "http://localhost:3000/signin";
  };

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const emailChange = () => {
    dispatch({ type: "EMAIL/FALSE" });
  };

  const CheckDiv = styled.div`
    width: 80px;
    height: 30px;
    background-color: #3498db;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    font-weight: bold;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  return (
    <>
      <form onSubmit={imgSubmit}>
        <label htmlFor="image">
          <Profileimg>
            <img id="previewImg" src="" />
          </Profileimg>
        </label>
        <input
          type="file"
          id="image"
          name="filename"
          style={{ display: "none" }}
        />
        <Button color={"color1"}>업로드</Button>
      </form>
      <form onSubmit={signupSubmit}>
        <Input type="hidden" name="userImg" id="inputImg" />

        <Input placeholder="text1" name="email" onChange={handleInputChange}/>
        {authCheck
        ?<CheckDiv>인증완료</CheckDiv>
        :<ModalChang props={email}></ModalChang>        
        }
        <Input placeholder="text2" name="userpw" type="password"/>
        <Input placeholder="text2" type="password"/>

        <Input placeholder="text3" name="nickname" />
        <Input placeholder="text4" name="phoneNumber" />
        <Input placeholder="text5" name="introduce" />
        <Button color={"color1"} onClick={emailChange}>
          가입하기
        </Button>
        <NavLink to="/">
          <Button color={"color1"} onClick={emailChange}>
            뒤로가기
          </Button>
        </NavLink>
      </form>
    </>
  );
};
