// import styled from "styled-components";
import { Button, Input, Profileimg } from "../../../common";
import request from "../../../lib/request";
import {useDispatch} from 'react-redux';
import { BEhost, BEport } from "../../../config";
import { ModalChang } from './modal.styled';
import { useState } from 'react';


export const SignupForm = () => {
  const [email, setEmail] = useState('')

  const imgSubmit = async(e) => {
    e.preventDefault()
    console.log('imgSubmit')
    const body = new FormData(e.target);
    const response = await request.post("/user/single", body, {
      headers: { "Content-Type": "multipart/form-data" }
    });
    console.log('res',response)
  
    const previewImg = document.querySelector("#previewImg");
    previewImg.src = `http://${BEhost}:${BEport}/${response.data.filename}`;
  }

  const signupSubmit = async(e) => {
    e.preventDefault()
    const previewImg = document.querySelector("#previewImg");
    const inputImg = document.querySelector("#inputImg")
    console.log("prev:",previewImg.src)
    inputImg.src = previewImg.src.split("/")[3]
    const {userImg, email, userpw, nickname, phoneNumber, introduce} = e.target
    const body = {userImg:userImg.value, email:email.value, userpw:userpw.value, nickname:nickname.value, phoneNumber:phoneNumber.value, introduce:introduce.value}
    const response = await request.post("/user/signup", body)
    console.log(response)
  }
  
  const handleInputChange =(e) =>{
    setEmail(e.target.value)

  }



  return (
    <>
      <form onSubmit={imgSubmit}>
        <label htmlFor="image">
          <Profileimg>
            <img id="previewImg" src=""/>
          </Profileimg>
        </label>
        <input type="file" id="image" name="filename" style={{display:"none"}}/>        
        <Button color={"color1"}>업로드</Button>
      </form>
      <form onSubmit={signupSubmit}>
        <Input type="hidden" name="userImg" id="inputImg" />
        <Input placeholder="text1" name="email" onChange={handleInputChange}/>
        <ModalChang props={email}></ModalChang>        
        <Input placeholder="text2" name="userpw" type="password"/>
        <Input placeholder="text2" type="password"/>
        <Input placeholder="text3" name="nickname" />
        <Input placeholder="text4" name="phoneNumber" />
        <Input placeholder="text5" name="introduce" />
        <Button color={"color1"}>가입하기</Button>
        <Button color={"color1"}>뒤로가기</Button>
      </form>
    </>
  );
};
