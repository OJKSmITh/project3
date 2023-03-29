import styled from 'styled-components';

const ContentWordBox = styled.div`
    width:1018px;
    height:70px;
    display:flex;
    background-color: var(--grey-color);
    margin-top:70px;
`

const ContentWordPart = styled.div`
    width:25%;
    height:70px;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:35px;
`

export const ContentWordWrap = ({word})=>{
    return (
        <ContentWordBox>
            <ContentWordPart>{word}</ContentWordPart>
            <ContentWordPart>{word}</ContentWordPart>
            <ContentWordPart>{word}</ContentWordPart>
            <ContentWordPart>{word}</ContentWordPart>
        </ContentWordBox>
    )
}