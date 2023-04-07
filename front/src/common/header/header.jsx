import { HeaderStyled } from "./styled";
import { HamburgerButtonComponent } from "./hamburger/hamburger";
import { NavLink, useLocation } from "react-router-dom";
import { ChatComponent, CommunityComponent, PianoComponent } from "../logo";
import { MainLogo } from "./Logo/logo";
import { useDispatch, useSelector } from 'react-redux';


export const Header = () =>{
    const location = useLocation()
    const headercolor = location.pathname === "/" ? "yellow" : "black" ;
    const iconcolor = location.pathname === "/" ? "black" : "white"
    const mainLogocheck  = location.pathname === "/" ? "blackLogo" : "whiteLogo"
    const  {isLogin} = useSelector((state)=>state.user)
    
    const checkLogin = (e) =>{
        console.log(isLogin)
        if(!isLogin) return alert("로그인을 해주세요.")
    }
    return (
      <HeaderStyled color={headercolor}>
            <NavLink to="/"><MainLogo Logocheck={mainLogocheck}/></NavLink>
            <div>
                <NavLink to="/community"><CommunityComponent color={iconcolor}/></NavLink>
                {  
                isLogin
                ?<NavLink to="/music"><PianoComponent color={iconcolor}/></NavLink>
                :<PianoComponent color={iconcolor} check={checkLogin}/>    
                }
                
            </div>
            <div>
                <ChatComponent color={iconcolor}/>
                <HamburgerButtonComponent/>
            </div>
        </HeaderStyled>
    )
}


