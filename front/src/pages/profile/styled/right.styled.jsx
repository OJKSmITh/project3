import styled from "styled-components";
import { Input, Button } from "../../../common";
import request from "../../../lib/request";

export const RightWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px 20px;
  box-sizing: border-box;
  align-items: center;
  position: absolute;
  right: 0;
  width: 50%;
  height: 100%;
  background-color: #a6b8c4;
  color: #fff;
  transition: all 0.5s;

  & > form > div {
    display: flex;
    justify-content: center;
  }

  & > form > div > button {
    padding: 10px 20px;
  }

  & > form > input:nth-child(4) {
    height: 100px;
  }
`;



export const Right = ({state, user, modify}) => {
  let {email, nickname, phoneNumber, introduce} = user



  const modifySubmit = async (e) => {
    e.preventDefault();
    modify()
    const { nickname, phoneNumber, introduce } = e.target;
    const body = {
      nickname: nickname.value,
      phoneNumber: phoneNumber.value,
      introduce: introduce.value,
    };
    // console.log(body)
    const response = await request.post("/user/me/modify", body);
    
    window.location.href = "http://localhost:3000/profile";
  }

  return (
    <RightWrap>
      {
        state 
        ? <>
          <form onSubmit={modifySubmit}>
            <Input value={email || ""} name="email" state="disabled"/>
            <Input value={nickname || ""} name="nickname" state={!state}/>
            <Input value={phoneNumber || ""} name="phoneNumber" state={!state} />
            <Input value={introduce || "소개를 입력해주세요."} name="introduce" state={!state}/>
            <div>
              <Button color={"color2"} textcolor={"color3"}>
              완료
              </Button>
              <Button onClick={()=>window.location.href='/'} color={"color2"} textcolor={"color3"}>
                뒤로가기
              </Button>
            </div>
          </form>

        </> 
        : <>
        <form onSubmit={(e)=>{
          e.preventDefault()
          modify()
          }}>
          <Input value={email || ""} state={true}/>
          <Input value={nickname || ""} state={!state}/>
          <Input value={phoneNumber || ""} state={!state} />
          <Input value={introduce || "소개를 입력해주세요."} state={!state}/>
          <div>
            <Button color={"color2"} textcolor={"color3"}>
              수정하기
            </Button>
            <Button onClick={()=>window.location.href='/'} color={"color2"} textcolor={"color3"}>
              뒤로가기
            </Button>
          </div>
        </form>
  
        </>
      }
          </RightWrap>
  );
};
