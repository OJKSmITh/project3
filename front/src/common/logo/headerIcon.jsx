import {Icon} from '@iconify/react';
import Modal from "react-modal"
import { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import openSocket from 'socket.io-client';


export const ChatComponent = ({color}) =>{
        const dispatch = useDispatch()
        const {chatStatus} = useSelector((state)=> state.chat)
        const {isLogin} = useSelector((state)=>state.user)
        const ChatIcon = styled(Icon)`
          cursor: pointer;
        `;
        const [socket, setSocket] = useState(null);
        const [modalIsOpen, setIsOpen] = useState(false);
        const [chatContent, setChat] = useState([]);
        const inputRef = useRef(null)
        const nickname = document.cookie.split("=")[1];

    
      const customStyles = {
          content: {
            top: '45%',
            left: '80%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: '#fff', // Modal 내용의 배경색
            borderRadius: '10px',
            padding: '20px',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
            width:"40%",
            height:"90%",
          },
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)' // Modal 배경의 흐림 정도
          }
        };

        useEffect(() => {
        const newSocket = openSocket.connect("http://localhost:3001", {
          transports: ["websocket"],
        });

        setSocket(newSocket);

        return () => {
          newSocket.disconnect();
        };
      }, []);

      useEffect(() => {
        if (!socket) return;
      
        socket.on("reply", (data) => {
          console.log(data);
          setChat((prevChat) => {
            data = JSON.parse(data);
            if (data.nickname !== nickname) {
              return [...prevChat, data];
            } else {
              return prevChat;
            }
          });
        });
        socket.on("user_enter", (userNickname) => {
          if (userNickname !== nickname) {
            setChat((prevChat) => [
              ...prevChat,
              { systemMessage: `${userNickname}님이 입장하셨습니다.` },
            ]);
          }
        });
        socket.on("user_exit", (userNickname) => {
          if (userNickname !== nickname) {
            setChat((prevChat) => [
              ...prevChat,
              { systemMessage: `${userNickname}님이 퇴장하셨습니다.` },
            ]);
          }
        });
      
        return () => {
          socket.off("user_enter");
          socket.off("user_exit");;
        };
      }, [socket, nickname]);

      useEffect(() => {
        if (modalIsOpen) {
          console.log("Modal is open");
          if (inputRef.current) {
            console.log("Focusing the input element");
            inputRef.current.focus();
          }
        }
      }, [modalIsOpen]);

      useEffect(() => {
        if (inputRef.current) {
          inputRef.current.focus();
        }
      }, [chatContent]);


      const openModal = () => {
        if(!isLogin) return alert("로그인을 해주세요")
        setIsOpen(true);
        socket.emit("user_enter", nickname); // emit user_enter event

      };
      const closeModal = () => {
        setIsOpen(false);
        socket.emit("user_exit", nickname); // emit user_exit event
      };
      const afterOpenModal = ()=>{
        dispatch({ type: "CHAT/TRUE" });
        if (inputRef.current) {
          inputRef.current.focus();
        }
      }
      const afterModalClose = () =>{

      }

      const ChatStart = styled.div`
        width:100%;
        height:100px;
        display:flex;
        justify-content:center;
        align-items:center;
      `
      const ChatContent = styled.div`
        height: 50px;
        display:flex;
        justify-content:center;
        align-items:center;
        background-color:#87CEEB;
        border:1px solid #000;
      `
      const ChatContent1 = styled.div`
        width:20%;
        height: 50px;
        display:flex;
        justify-content:center;
        align-items:center;
        background-color:#87CEEB;
        border:1px solid #000;
      `
      const ChatContent2 = styled.div`
        width:80%;
        height: 50px;
        display:flex;
        justify-content:center;
        align-items:center;
        background-color:#87CEEB;
        border:1px solid #000;
      `

      const ChatForm = styled.form`
        width:100%;
        display:flex;
        justify-content:center;
        align-items:center;
      `

      const ChatInput = styled.input`
        width:75%;
        height:100%;
      `
      const ChatButton = styled.button`
        width:25%;
        height:100%;
      `

      const ChatContentWrap = styled.div`
        display:flex;
        width:100%;
      `

      const chatSubmit = (e) => {
        e.preventDefault();
        const { value } = e.target.inputValue;
        const userInfo = { nickname, data: value };
        socket.emit("data", userInfo);
        // 내가 보낸 메시지를 chatContent에 추가
        setChat((prevChat) => [...prevChat, userInfo]);
        e.target.reset();
      };
      
      return (
        <>
          <ChatIcon
            icon="material-symbols:chat-bubble-outline"
            color={color}
            width="40"
            height="40"
            onClick={openModal}
          />
          <Modal
            isOpen={modalIsOpen}
            style={customStyles}
            onAfterOpen={() => {
              console.log("onAfterOpen called");
              afterOpenModal();
            }}
            onRequestClose={closeModal}
            onAfterClose={afterModalClose}
          >
            <ChatStart>
              <h2>채팅이 시작되었습니다.</h2>
            </ChatStart>
            {chatStatus ? (
              <ChatContent>
                <div>{nickname}님이 입장하셨습니다</div>
              </ChatContent>
            ) : (
              <></>
            )}
            {chatContent.map((message, index) =>
              message.systemMessage ? (
                <ChatContent key={index}>
                  <div>{message.systemMessage}</div>
                </ChatContent>
              ) : (
                <ChatContentWrap key={index}>
                  <ChatContent1>{message.nickname}</ChatContent1>
                  <ChatContent2>{message.data}</ChatContent2>
                </ChatContentWrap>
              )
            )}
            <ChatForm onSubmit={chatSubmit}>
              <ChatInput name="inputValue" ref={inputRef}></ChatInput>
              <ChatButton>전송</ChatButton>
            </ChatForm>
          </Modal>
        </>
      );
}
export const CommunityComponent =  ({color}) => {
    return <Icon icon="fluent:people-community-24-regular" color={color} width="40" height="40"  />
}
export const PianoComponent = ({color, check}) =>{
    return <Icon icon="material-symbols:piano" color={color} width="40" height="40" style={{cursor: 'pointer'}} onClick={check}/>
}