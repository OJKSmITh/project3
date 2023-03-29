import styled from 'styled-components'

export const Content = ({word}) =>{
    const ContetentStyled = styled.div`
        margin: 0 auto;
        font-size: 30px;
        padding:20px;
        padding-left:25px;
    `

    return (
        <ContetentStyled>
            {word}
        </ContetentStyled>
    )
}