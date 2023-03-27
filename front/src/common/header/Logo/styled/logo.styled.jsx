import styled from 'styled-components';
import BlackLogo from "../../../images/blackLogo.png"
import WhiteLogo from "../../../images/Logo.png"


export const BlackLogostyled = styled.div`
    
    & > div{
        background-image:url(${BlackLogo});
        width:45px;
        height:45px;
        background-size:cover;
        object-fit:cover;
    }
`

export const WhiteLogostyled = styled.div`
    & > div {
        background-image:url(${WhiteLogo});
        width:45px;
        height:45px;
        background-size:cover;
        object-fit:cover;
    }
`