import { NavLink } from "react-router-dom"
import { Navbar } from "./styled/header.styled"
export const Header = () => {
    
    return <>
        <Navbar>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/community">Community</NavLink></li>
            <li><NavLink to="/music">Music</NavLink></li>
            <li><NavLink to="/signin">Signin</NavLink></li>
        </Navbar>
    </>
}