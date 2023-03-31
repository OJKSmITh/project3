import { useState } from 'react';
import { NavLink } from "react-router-dom";
import { HamburgerStyled, SubMenu } from './styled';
import {useDispatch, useSelector} from "react-redux"



export const HamburgerButtonComponent = () => {
  const dispatch = useDispatch()
  const {loadding, error, data, isLogin} = useSelector(state => state.user)
  const [showSubMenu, setShowSubMenu] = useState(false)
  console.log(isLogin)
  const toggleSubMenu = () =>setShowSubMenu(!showSubMenu)

  const logoutAction = () =>{
    dispatch({type:'USER/LOGOUT'})
    toggleSubMenu()
  }

  return(
    <>
    <HamburgerStyled onClick={toggleSubMenu}>
      <span></span>
      <span></span>
      <span></span>
    </HamburgerStyled>
    {showSubMenu && (
      <SubMenu>
        <NavLink to="/board/list" onClick={toggleSubMenu}>글쓰기</NavLink>
        <NavLink to="/music" onClick={toggleSubMenu}>피아노 치기</NavLink>
        {isLogin === false ?
        (<NavLink to="/signin" onClick={toggleSubMenu}>로그인</NavLink>):
        (<NavLink onClick={logoutAction}>로그아웃</NavLink>)
        }
      </SubMenu>
    )}
    </>
    )
};
