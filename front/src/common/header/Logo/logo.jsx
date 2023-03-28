import { useLocation } from 'react-router-dom';
import {MainLogoStyled} from "./styled"
import blackLogo from "../../images/blackLogo.png"
import whiteLogo from "../../images/Logo.png"

export const MainLogo = ({Logocheck}) =>{
    const logoImg = Logocheck === "blackLogo" ? blackLogo : whiteLogo
    return (
        <MainLogoStyled Img={logoImg}>
            <div></div>
        </MainLogoStyled>
    )
}