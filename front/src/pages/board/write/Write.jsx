import { WriteBox, SubjectBox, ContentBox, SubBtn, Upload,WriteSubmit } from './styled/write.styled'

export const Write = () => {
    
    return <>
        <WriteBox>
            <WriteSubmit>
                <SubjectBox></SubjectBox>
                <ContentBox></ContentBox>
                <SubBtn>완료</SubBtn>
            </WriteSubmit>
            <Upload></Upload>
        </WriteBox>
    </>
}