import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


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
    color:black;
`

export const ListWriteButton = () =>{
    return ( 
        <NavLink to="/community/write"><WriteButtonStyled>글쓰기</WriteButtonStyled></NavLink>
    )
}