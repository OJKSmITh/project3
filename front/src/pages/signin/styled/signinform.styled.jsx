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

    if(result.data){
      dispatch({type:"USER/LOGIN", payload:result.data})
      navigate("/")
    } else{
      alert("아이디나 비밀번호가 일치하지 않습니다.")
    }
    
  }
  return (
    <Left onSubmit={handleSubmit}>
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
      <Input placeholder="text1"  name={"useremail"} type={"text"} id={"useremail"} />
      <Input placeholder="text2"  name={"userpw"} type={"password"} id={"userpw"} />
      <Button color={"color1"}>Sign In</Button>
    </Left>
  );
};
