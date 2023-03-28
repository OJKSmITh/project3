import styled from 'styled-components'
import Logo from '../../../common/images/Logo.png'


export const Wrapper = styled.div`
    width: 100%;
    height: 1080px;
`

export const WelcomeLogo = styled.div`
    background-image: url(${Logo});
    width: 550px;
    height: 496px;
    margin: auto;
    background-repeat: no-repeat;
    box-sizing: border-box;
`

export const WelcomeText = styled.div`
    text-align: center;
    margin: 0 0 100px 0;
    color: #fff;
    font-weight: 400;
    font-size: 48px;
    line-height: 58px;
`

export const Gobtn = ({children}) =>{
    
    const Btnbox = styled.div`
        margin: 0 auto;
        width: 300px;
        height: 80px;
        text-align: center;
        background: #fff;
        border-radius: 60px;
        padding: 10px;
        box-sizing: border-box;
    `

    const Text = styled.span`
        font-weight: 400;
        font-size: 50px;
        line-height: 60px;
    `

    return <>
        <Btnbox>
            <Text>{children}</Text>
        </Btnbox>
    </>
}
