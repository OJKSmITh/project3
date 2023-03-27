import styled from 'styled-components';
import blackLogo from "../../../common/images/blackLogo.png"
import {ReactComponent as Blackpiano} from "../../../common/images/svg/blackpiano.svg"
import {ReactComponent as Blackcommunity} from "../../../common/images/svg/blackcommunity.svg"
import {ReactComponent as Blackbell} from "../../../common/images/svg/blackbell.svg"
import { HamburgerButtonComponent } from '../../../common/mainheader/hamburger/hamburger';

const Left =styled.div`
    display:flex;
    justify-content:space-between;
    width:100%;

    & > div:first-child {
        background-image: url(${blackLogo});
        width:45px;
        height: 45px;
        background-size: cover;
        object-fit: cover;        
    }

    & > div:last-child {
    display: flex;
    align-items: center;
    }

  & > div:last-child svg:first-child {
    margin-right: 10px;
    }

  & > div:last-child > *:last-child {
    margin-left: auto;
    }

`

export const Mainheader = () =>{
    return (
        <Left>
            <div></div>
            <div>
                <Blackcommunity/>
                <Blackpiano/>
            </div>
            <div>
                <Blackbell/>
                <HamburgerButtonComponent/>
            </div>
        </Left>
    )
}