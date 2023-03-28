import styled from 'styled-components';

export const MainLogoStyled = styled.div`
    & > div {
        background-image: url(${({Img})=>Img});
        background-position: center;
        background-size: cover;
        width: 45px;
        height: 45px;
        box-sizing: border-box;
        object-fit:cover;
    }

`