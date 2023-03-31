// import styled from "styled-components";
import { Button, Input, Profileimg } from "../../../common";
import request from "../../../lib/request";
import {useDispatch} from 'react-redux'

export const SignupForm = () => {
  const dispatch = useDispatch()
  console.log(dispatch({type:"USER/LOGIN", isLogin:true, data:{email:"...", nickname:""}}))

  const imgSubmit = async(e) => {
    e.preventDefault()
    const body = new FormData(e.target);
    const response = await request.post("/user/single", body, {
      headers: { "Content-Type": "multipart/form-data" }
    });
  
    const previewImg = document.querySelector("#previewImg");
    previewImg.src = `http://127.0.0.1:3001/${response.data.filename}`;
  }

  const signupSubmit = async(e) => {
    e.preventDefault()
    const previewImg = document.querySelector("#previewImg");
    const inputImg = document.querySelector("#inputImg")
    inputImg.value = previewImg.src.split("/")[3]
    const {userImg, email, userpw, nickname, phoneNumber, introduce} = e.target
    const body = {userImg:userImg.value, email:email.value, userpw:userpw.value, nickname:nickname.value, phoneNumber:phoneNumber.value, introduce:introduce.value}
    const response = await request.post("/user/signup", body)
    // console.log(response)
  }

  

  return (
    <>
      <form onSubmit={imgSubmit}>
        <label htmlFor="image">
          <Profileimg>
            <img id="previewImg" src="/Users/mac/Desktop/KGA/ipk_board/back/uploads/default-image.png"/>
          </Profileimg>
        </label>
        <input type="file" id="image" name="filename" style={{display:"none"}}/>        
        <Button color={"color1"}>업로드</Button>
      </form>
      <form onSubmit={signupSubmit}>
        <Input type="hidden" name="userImg" id="inputImg" />
        <Input placeholder="text1" name="email"/>
        <Input placeholder="text2" name="userpw" type="password"/>
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
