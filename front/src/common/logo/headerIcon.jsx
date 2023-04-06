import {Icon} from '@iconify/react';
import Modal from "react-modal"
import { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import openSocket from 'socket.io-client';

export const ChatComponent = ({color}) =>{

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
  
        // 내가 보낸 메시지를 걸러냅니다.
        if (data.nickname !== nickname) {
          return [...prevChat, data];
        } else {
          return prevChat;
        }
      });
    });
  
    return () => {
      socket.off("reply");
    };
  }, [socket, nickname]);

  useEffect(() => {
    if (modalIsOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [modalIsOpen]);


      const openModal = () =>{
        setIsOpen(true)
      }
      const closeModal = () =>{
        setIsOpen(false)
      }
      const afterOpenModal = ()=>{
        inputRef.current.focus()
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
          <Modal isOpen={modalIsOpen} style={customStyles} onAfterOpen={afterOpenModal}>
            <ChatStart>
              <h2>채팅이 시작되었습니다.</h2>
            </ChatStart>
            <ChatContent>
                <div>{nickname}님이 입장하셨습니다</div> 
            </ChatContent>
              {chatContent.map((message, index) => (
                  (<ChatContentWrap> 
                  <ChatContent1 key={index}>{message.nickname}</ChatContent1>
                  <ChatContent2 key={index}>{message.data}</ChatContent2>
                  </ChatContentWrap>)
                ))}
                   
            <ChatForm onSubmit={chatSubmit}>
              <ChatInput name='inputValue' ref={inputRef}></ChatInput>
              <ChatButton>전송</ChatButton>
            </ChatForm>
          </Modal>
        </>
      );
}
export const CommunityComponent =  ({color}) => {
    return <Icon icon="fluent:people-community-24-regular" color={color} width="40" height="40" />
}
export const PianoComponent = ({color}) =>{
    return <Icon icon="material-symbols:piano" color={color} width="40" height="40" />
}