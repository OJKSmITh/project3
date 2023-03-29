import styled from 'styled-components';

const CompleteButtonStyled = styled.div`
    width:250px;
    height:50px;
    border-radius:75px;
    background-color:var(--grey-color);
    display:flex;
    justify-content:center;
    align-items:center;
    margin-left:600px;
`

export const CompleteButton = () =>{
    return (
        <CompleteButtonStyled>
            완료
        </CompleteButtonStyled>
    )
}