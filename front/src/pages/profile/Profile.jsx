import { Wrap, Form, Left, Right } from "./styled";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import request from "../../lib/request";

export const Profile = () => {
  const {isLogin} = useSelector(state => state.user)

  useEffect(()=>{
    (async()=>{
      const token = document.cookie.split('=')[1]
      console.log(token)
      const {data} = await request.get('/user/me',{token})
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
          <Left></Left>
          <Right></Right>
        </Form>
      </Wrap>
    </>
  );
};
