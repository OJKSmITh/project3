import { HeaderStyled } from "./styled";
import { HamburgerButtonComponent } from "./hamburger/hamburger";
import { NavLink, useLocation } from "react-router-dom";
import { BellComponent, CommunityComponent, PianoComponent } from "../logo";
import { MainLogo } from "./Logo/logo";

export const Header = () => {
  const location = useLocation();
  const headercolor = location.pathname === "/" ? "yellow" : "black";
  const iconcolor = location.pathname === "/" ? "black" : "white";
  const mainLogocheck = location.pathname === "/" ? "blackLogo" : "whiteLogo";


export const Header = () =>{
    const location = useLocation()
    const headercolor = location.pathname === "/" ? "yellow" : "black" ;
    const iconcolor = location.pathname === "/" ? "black" : "white"
    const mainLogocheck  = location.pathname === "/" ? "blackLogo" : "whiteLogo"

    return (
      <HeaderStyled color={headercolor}>
            <NavLink to="/"><MainLogo Logocheck={mainLogocheck}/></NavLink>
            <div>
                <NavLink to="/board"><CommunityComponent color={iconcolor}/></NavLink>
                <NavLink to="/music"><PianoComponent color={iconcolor}/></NavLink>
            </div>
            <div>
                <BellComponent color={iconcolor}/>
                <HamburgerButtonComponent/>
            </div>
        </HeaderStyled>
    )
}

