import { Button } from "../../../common";
import Modal from "react-modal";
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

const ModalForm = styled.form`
    display:flex;
    flex-direction:column;
    margin-top:20px;
    justify-content:center;
    align-items:center;
`
const ModalInput = styled.input`
    width:310px;
    height:20px;
    margin-bottom:25px;
`
const ModalButton = styled.button`
    width:50px;
    height:20px;
`
const ModalDiv = styled.div`
    display:flex;
`

export const ModalChang = (props) =>{
    const dispatch = useDispatch()
    const {authCheck} = useSelector(state => state.email)
    const [modalIsOpen, setIsOpen] = useState(false)
    const [randomNum, setNum] = useState("")
    const [emailAuth, setemail] = useState("")
    

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
          },
    }
  
    useEffect(() => {
        Modal.setAppElement(".modalparent");
    }, [modalIsOpen]);

    const openModal = () =>{
        setIsOpen(true)
    }
  
    const afterOpenModal = async () =>{
        try {
            const result = await axios.post("https://api.hanjin.shop/auth/mail", {email:props} ,{withCredentials:true})
        } catch (e) {
            alert("아이디가 중복됩니다")
            setIsOpen(false)
        }
    }
  
    const closeModal= () =>{
        setIsOpen(false)
    }

    const afterModalClose = () =>{
    }

    const numberCheck = async (e) =>{
        console.log(e)
        e.preventDefault()
        const cookies = document.cookie.split("=")
        const sessionId = cookies[1]
        const result =await axios.post("https://api.hanjin.shop/auth/number", {number:randomNum, sessionId},{withCredentials:true})
        dispatch({type:"EMAIL/TRUE"})
    }

    const numberValue = (e) =>{
        setNum(e.target.value)
    }

    const CheckDiv2 = styled.div`
    width:80px;
    height:30px;
    background-color: #d9d9d9;
    color: black;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    font-weight: bold;
    margin: 0 auto;
    display:flex;
    justify-content:center;
    align-items:center;
`

    return (
        <>
            <CheckDiv2 onClick={openModal} className="modalparent">인증</CheckDiv2>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onAfterClose={afterModalClose}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <h2>메일의 인증번호를 확인해 주세요</h2>
                <ModalForm onSubmit={numberCheck}>
                <ModalInput placeholder='인증번호를 넣어주세요' onChange={numberValue}/>
                <ModalDiv>
                    { authCheck 
                    ?<ModalButton onClick={closeModal}>종료</ModalButton>
                    :<ModalButton type='submit'>완료</ModalButton>
                    }
                    
                </ModalDiv>

                </ModalForm>
            </Modal>
        </>
    ) 
  }
