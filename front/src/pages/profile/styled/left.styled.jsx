import styled from "styled-components";
import { Profileimg, Input, Button } from "../../../common";
import Logo from "../../../common/images/Logo.png";
import request from "../../../lib/request";
export const LeftWrap = styled.div`
  position: absolute;
  left: 0;
  width: 50%;
  height: 100%;
  transition: all 0.5s;
  box-sizing: border-box;
  background: #e9edf1;
  display: flex;
  /* flex-direction: column; */
  padding: 0 50px;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;

  & > form > button {
    margin-left : 35px;
  }

  & > input {
    margin-top: 10px;
    height: 140px;
  }

  & .logo {
    background-image: url(${Logo});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 200px;
    height: 150px;
    box-sizing: border-box;
  }

`;

export const Left = ({user, modify}) => {
  console.log(user)
  console.log(modify)
  const imgSubmit = async (e) => {
      e.preventDefault();
      const body = new FormData(e.target);
      const response = await request.post("/single", body, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      const previewImg = document.querySelector("#previewImg");
      if(response.status===200){
        const res = await request.post('/user/me/modify',{userImg:response.data.filename})
        modify({userImg:response.data.filename})
      }
      previewImg.src = `http://127.0.0.1:3001/${response.data.filename}`;
      window.history.go()    
  }

  return (
    <>
      <LeftWrap>
        <form onSubmit={imgSubmit}>
          <div className="logo"></div>
          <label htmlFor="image">
            <Profileimg id="profileImg">
              <img src={user.userImg} id="previewImg" />
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
      </LeftWrap>
    </>
  );
};
