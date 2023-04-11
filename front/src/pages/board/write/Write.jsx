import {
  WriteBox,
  SubjectBox,
  ContentBox,
  SubBtn,
  Upload,
  WriteSubmit,
} from "./styled/write.styled";
import request from "../../../lib/request";
import {useSelector} from "react-redux"
import { useState } from "react";

export const Write = () => {

    const {isLogin} = useSelector(state => state.user)
    const [uploadFile, setUploadFile] = useState("")
    if( !isLogin || !document.cookie){
        alert("비정상적이 접근입니다.")
        window.location.href = '/'
        return 0
    }


    const writeSubmitHandle = async (e) => {
        e.preventDefault()
        const { subject, content } = e.target
        const nickname = "test1"
        const data = { subject:subject.value, content: content.value, nickname, uploadImg: uploadFile}
        const response = await request.post("/board",data)
        if (response.status === 200) window.location.href='/community'
    }

    const upload = (data) => {
        setUploadFile(data)
    }

    
    return <>
        <WriteBox>
            <WriteSubmit onSubmit={writeSubmitHandle}>
                <SubjectBox></SubjectBox>
                <ContentBox></ContentBox>
                <SubBtn>완료</SubBtn>
            </WriteSubmit>
            <Upload uploadfile={upload} file={uploadFile}></Upload>
        </WriteBox>
    </>
};
