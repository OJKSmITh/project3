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

  & > form > input:nth-child(5) {
    height: 100px;
  }
`;



export const Right = ({state, user, modify}) => {
  let {email, nickname, phoneNumber, introduce} = user
  const userModify = (state, modify) => {
    return (e)=>{
      modify(!state)
    }
  }

  const modifySubmit = async (e) => {
    e.preventDefault();
    const previewImg = document.querySelector("#previewImg");
    const inputImg = document.querySelector("#inputImg");
    inputImg.src = previewImg.src;
    const { nickname, phoneNumber, introduce } = e.target;
    const body = {
      nickname: nickname.value,
      phoneNumber: phoneNumber.value,
      introduce: introduce.value,
    };
    const response = await request.post("/user/me/modify", body);
    window.location.href = "http://localhost:3000/profile";
  }

  return (
    <RightWrap>
      {
        state 
        ? <>
          <form onSubmit={(e)=>e.preventDefault()}>
            <Input type="hidden" name="userImg" id="inputImg" />
            <Input value={email || ""} state="disabled"/>
            <Input value={nickname || ""} state={state===true? false:"disabled"}/>
            <Input value={phoneNumber || ""} state={state===true? false:"disabled"} />
            <Input value={introduce || "소개를 입력해주세요."} state={state===true? false:"disabled"}/>
            <div>
              <Button onClick={userModify(state, modify)} color={"color2"} textcolor={"color3"}>
                {state?"완료":"수정하기"}
              </Button>
              <Button onClick={()=>window.location.href='/'} color={"color2"} textcolor={"color3"}>
                뒤로가기
              </Button>
            </div>
          </form>

        </> 
        : <>
        <form onSubmit={modifySubmit}>
          <Input type="hidden" name="userImg" id="inputImg" />
          <Input value={email || ""} state="disabled"/>
          <Input value={nickname || ""} state={state===true? false:"disabled"}/>
          <Input value={phoneNumber || ""} state={state===true? false:"disabled"} />
          <Input value={introduce || "소개를 입력해주세요."} state={state===true? false:"disabled"}/>
          <div>
            <Button onClick={userModify(state, modify)} color={"color2"} textcolor={"color3"}>
              {state?"완료":"수정하기"}
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
