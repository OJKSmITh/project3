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

export const ContentWordWrap = ({subject, content, date, nickname})=>{
    return (
        <ContentWordBox>
            <ContentWordPart>{subject}</ContentWordPart>
            <ContentWordPart>{content}</ContentWordPart>
            <ContentWordPart>{date}</ContentWordPart>
            <ContentWordPart>{nickname}</ContentWordPart>
        </ContentWordBox>
    )
}