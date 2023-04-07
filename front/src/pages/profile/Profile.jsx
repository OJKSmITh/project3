import { Wrap, Form, Left, Right } from "./styled";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import request from "../../lib/request";
import { useState } from "react";

export const Profile = () => {
  const {isLogin} = useSelector(state => state.user)
  const [userInfo, setUserInfo] = useState([])

  useEffect(()=>{
    (async()=>{
      const token = document.cookie.split('=')[1]
      const {data} = await request.get(`/user/me/${token}`)
      setUserInfo(data)
    })()
  },[])

  if( !isLogin || !document.cookie){
      alert("비정상적이 접근입니다.")
      window.location.href = '/'
      return 0
  }

 


  return (
    <>
      <Wrap>
        <Form>
          <Left profileImg={userInfo.userImg}></Left>
          <Right user={userInfo}></Right>
        </Form>
      </Wrap>
    </>
  );
};
