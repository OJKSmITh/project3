import styled from 'styled-components';

export const Subject = ({word}) =>{
    const SubjectWordStyled = styled.div`
        display:flex;
        justify-content:center;
        padding-right:45px;
        padding-top:20px;
        font-family:"PlayfairDisplay-Italic";
        font-size: 45px;
    `
    return (
        <SubjectWordStyled>
            {word}
        </SubjectWordStyled>
    )
}
    
