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

export const Write = () => {

    const {isLogin} = useSelector(state => state.user)

    if( !isLogin || !document.cookie){
        alert("비정상적이 접근입니다.")
        window.location.href = '/'
        return 0
    }


    const writeSubmitHandle = async (e) => {
        e.preventDefault()
        const { subject, content } = e.target
        const nickname = "test1"
        const data = { subject:subject.value, content: content.value, nickname}
        console.log(data)
        const response = await request.post("/board",data)
        console.log(response)
    }
    
    return <>
        <WriteBox>
            <WriteSubmit onSubmit={writeSubmitHandle}>
                <SubjectBox></SubjectBox>
                <ContentBox></ContentBox>
                <SubBtn>완료</SubBtn>
            </WriteSubmit>
            <Upload></Upload>
        </WriteBox>
    </>
};
