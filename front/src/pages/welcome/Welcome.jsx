import { Wrapper, WelcomeLogo, WelcomeText, Gobtn } from "./styled/welcome.styled"
import { NavLink } from "react-router-dom"

export const Welcome = () => {
    
    return <>
        <Wrapper>
            <WelcomeLogo />
            <WelcomeText>Gpt Music에 오신걸 환영합니다.</WelcomeText>
            <NavLink to="/" ><Gobtn>Go!</Gobtn></NavLink>
        </Wrapper>

    </>
}