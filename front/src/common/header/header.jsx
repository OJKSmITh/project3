import { HeaderStyled } from './styled';
import { HamburgerButtonComponent } from './hamburger/hamburger';
import {NavLink} from "react-router-dom"
import { BellComponent, CommunityComponent, PianoComponent } from '../logo';
import { BlackLogo } from './Logo';



export const Header = ({color}) =>{
    return (
      <HeaderStyled color={color}>
            <NavLink to="/"><BlackLogo/></NavLink>
            <div>
                <CommunityComponent color={"black"}/>
                <PianoComponent color={"black"}/>
            </div>
            <div>
                <BellComponent color={"black"}/>
                <HamburgerButtonComponent/>
            </div>
        </HeaderStyled>
    )
}