import { WriteBox, SubjectBox, ContentBox, SubBtn, Upload,WriteSubmit } from './styled/write.styled'
import request from '../../../lib/request'
import {useSelector} from "react-redux"

export const Write = () => {
    const data = useSelector(state => state.user)
    console.log(data)

    const writeSubmitHandle = (e) => {
        e.preventDefault()
        const { subject, write } = e.target
        const data = { subject:subject.value, write: write.value}
        const response = request.post("/write",data)
        
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
}