import { useState } from 'react';
import { NavLink } from "react-router-dom";
import { HamburgerStyled, SubMenu } from './styled';



export const HamburgerButtonComponent = ( ) => {
  const [showSubMenu, setShowSubMenu] = useState(false)

  const toggleSubMenu = () =>setShowSubMenu(!showSubMenu)


  return(
    <>
    <HamburgerStyled onClick={toggleSubMenu}>
      <span></span>
      <span></span>
      <span></span>
    </HamburgerStyled>
    {showSubMenu && (
      <SubMenu>
        <NavLink to="/board/list">글쓰기</NavLink>
        <NavLink to="/music">피아노 치기</NavLink>
        <NavLink to="/logout">로그인</NavLink>
      </SubMenu>
    )}
    </>
    )
};
