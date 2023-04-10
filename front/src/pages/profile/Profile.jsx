 import { Wrap, Form, Left, Right } from "./styled";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import request from "../../lib/request";
import { useState } from "react";

export const Profile = () => {
  const {isLogin} = useSelector(state => state.user)
  const [userInfo, setUserInfo] = useState([])
  const [isModify, setisModify] = useState(false)

  useEffect(()=>{
    (async()=>{
      const token = document.cookie.split('=')[1]
      const {data} = await request.get(`/user/me/${token}`)
      // if(Object.entries(userInfo).toString() !== Object.entries(data).toString()) {
        setUserInfo(data)
      // }

    })(userInfo)
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
          <Left state={isModify} modify={setUserInfo} user={userInfo}></Left>
          <Right state={isModify} modify={setisModify} user={userInfo}></Right>
        </Form>
      </Wrap>
    </>
  );
};
