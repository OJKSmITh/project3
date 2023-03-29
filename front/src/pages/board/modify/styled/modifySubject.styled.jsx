import styled from 'styled-components';

const ModifySubjectStyled = styled.div`
    width:1400px;
    height:87px;
    background-color:var(--blue-color);
    display:flex;
    

    & > input {
        background-color:var(--blue-color);
        border: none;
        outline: none;
        width: 550px;
        font-size: 35px;
        margin-left: 20px;
    }
`

export const ModifySubject = ({subjectWord}) =>{
    return (
        <ModifySubjectStyled>
            <input type="text" defaultValue={subjectWord} />
        </ModifySubjectStyled>
    )
}