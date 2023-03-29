import styled from 'styled-components'

const InputWrap = styled.div`
    width:100%;
    height:600px;
    background-color: var(--blue-color);
    overflow:hidden;

    &.test1 {
        margin-left:350px;
    }
`

const ModifyContentInputStyled = styled.input`
    width:100%;
    height: 50px;
    background-color:var(--blue-color);
    border:none;
    outline:none;
    text-align:left;
    padding-left:20px;

`

export const ModifyContentInput = ({data}) =>{
    return ( 
        <InputWrap>
            <ModifyContentInputStyled defaultValue={"데이터 넣을곳"}/>
        </InputWrap>
    )
}