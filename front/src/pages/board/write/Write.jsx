import { WriteBox, SubjectBox, ContentBox, SubBtn, Upload,WriteSubmit } from './styled/write.styled'
import request from '../../../lib/request'
import { useSelector } from 'react-redux'

export const Write = () => {
    
    const data = useSelector( state => state.user)
    console.log(data)

    const writeSubmitHandle = async (e) => {
        e.preventDefault()
        const { subject, write } = e.target
        const nickname = JSON.parse(localStorage.getItem("persist:root")).user
        console.log(nickname)
        const data = { subject:subject.value, write: write.value}
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
}