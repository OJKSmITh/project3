import styled from 'styled-components';

const WriteButtonStyled = styled.div`
    width:70px;
    height:65px;
    background-color: var(--grey-color);
    display:flex;
    justify-content:center;
    align-items:center;
    font-size: 25px;
    border-radius:30px;
    position:absolute;
    left:1550px;
    bottom:60px;
    
`

export const ListWriteButton = () =>{
    return ( 
        <WriteButtonStyled>글쓰기</WriteButtonStyled>
    )
}