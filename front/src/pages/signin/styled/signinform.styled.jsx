import styled from "styled-components";
import { Button, SocialLink, Input } from "../../../common";
import { useDispatch, useSelector } from 'react-redux';
import { useInput } from '../../../hooks/useInput';
import axios from "axios"
import {useNavigate} from "react-router-dom"


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

export const SigninForm = ({history}) => {
  const dispatch = useDispatch()
  const navigate =useNavigate()

  const handleSubmit = async (e) =>{
    e.preventDefault()
    const useremail = e.target.useremail.value
    const userpw = e.target.userpw.value
    const result = await axios.post("http://localhost:3001/auth", {useremail, userpw}, {withCredentials:true})
    console.log(result)
    if(result.data){
      dispatch({type:"USER/LOGIN", payload:result.data})
      navigate("/")
    } else{
      alert("아이디나 비밀번호가 일치하지 않습니다.")
    }
  }

  const kakaoLogin = async (e) => {
    const REST_API_KEY = "5b3b08b057b1fcec026c0d76f74db766"
    const REDIRECT_URI =  "http://localhost:3001/oauth/kakao"
    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
    window.location.href= KAKAO_AUTH_URL
  }

  const naverLogin = async () =>{
    const NAVER_CLIENT_ID = "em49bNLauiPn0rU9S53Z"
    const NAVER_CALLBACK_URL = "http://localhost:3001/oauth/naver"
    const NAVER_AUTH_URL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${NAVER_CLIENT_ID}&redirect_uri=${NAVER_CALLBACK_URL}&state=50`
    window.location.href = NAVER_AUTH_URL
   
  }

  const googleLogin = async () => {
    const GOOGLE_CLIENT_ID = "888046920176-b3dfcncj4c06lti1h3o6cpt7davrp150.apps.googleusercontent.com"
    const GOOGLE_REDIRECT_URI = "http://localhost:3001/oauth/google"
    const GOOGLE_AUTH_URL= `https://accounts.google.com/o/oauth2/v2/auth?client_id=${GOOGLE_CLIENT_ID}&redirect_uri=${GOOGLE_REDIRECT_URI}&response_type=code&scope=email profile openid`
    window.location.href = GOOGLE_AUTH_URL
  }

  return (
    <Left onSubmit={handleSubmit}>
      <h1>Sign In</h1>
      <SocialLink>
        <div>
          <a onClick={kakaoLogin}>
            <i aria-hidden="true">K</i>
          </a>
        </div>
        <div>
          <a onClick={googleLogin}>
            <i aria-hidden="true">G</i>
          </a>
        </div>
        <div>
          <a onClick={naverLogin}>
            <i aria-hidden="true">N</i>
          </a>
        </div>
      </SocialLink>
      <Span>or use your account</Span>
      <Input placeholder="text1"  name={"useremail"} type={"text"} id={"useremail"} />
      <Input placeholder="text2"  name={"userpw"} type={"password"} id={"userpw"} />
      <Button color={"color1"}>Sign In</Button>
    </Left>
  );
};
