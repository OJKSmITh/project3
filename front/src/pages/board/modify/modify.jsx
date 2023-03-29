import { ModifyWrap, ModifySubject, ModifyContentWrapStyled, ModifyContentInput, FileDiv, Mp3Button, ImageButton, CompleteButton,ButtonWrapStyled } from './styled'


export const Modify = () =>{
    return (
        <ModifyWrap>
            <ModifySubject subjectWord={"제목 :기본값"}>
            </ModifySubject>
            <ModifyContentWrapStyled>
                <ModifyContentInput/>
                <FileDiv/>
                <ButtonWrapStyled>
                        <Mp3Button/>
                        <ImageButton/>
                    <CompleteButton/>
                </ButtonWrapStyled>
            </ModifyContentWrapStyled>
        </ModifyWrap>
    )
}