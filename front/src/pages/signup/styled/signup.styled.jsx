// import styled from "styled-components";
import { Button, Input, Profileimg } from "../../../common";
import request from "../../../lib/request";


export const SignupForm = () => {

  const imgSubmit = async(e) => {
    e.preventDefault()
    const body = new FormData(e.target);
    console.log(e.target)
    const response = await request.post("/user/single", body, {
      headers: { "Content-Type": "multipart/form-data" }
    });
    const inputImg = document.querySelector("#inputImg");
    console.log(inputImg)
    const previewImg = document.querySelector("#previewImg");
    inputImg.value = response.data.filename;
    previewImg.src = `http://127.0.0.1:3000/${response.data.filename}`;
  }

  const signupSubmit = (e) => {
    e.preventDefault()
    const inputImg = document.querySelector("#inputImg");
    console.log(inputImg)
  }

  

  return (
    <>
      <form onSubmit={imgSubmit} encType='multipart/form-data'>
        <label htmlFor="image">
          <Profileimg>
            <img id="previewImg" src="/Users/mac/Desktop/KGA/ipk_board/back/uploads/default-image.png"/>
          </Profileimg>
        </label>
        <input type="file" id="image" name="filename"/>        
        <Button color={"color1"}>업로드</Button>
      </form>
      <form onSubmit={signupSubmit}>
        <Input type="hidden" name="userImg" id="inputImg" />
        <Input placeholder="text1" />
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
