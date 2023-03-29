import styled from 'styled-components';

export const ContentSubjectWrap = () =>{

    const ContentSubjectWrapStyled = styled.div`
        width:1016px;
        height:50px;
        display:flex;
        background-color: #d9d9d9;
        margin: 20px auto 0;
        justify-content:space-around;
        align-items: center;
        border: 1px solid;
    `;
    const ContentSubjectContent = styled.div`
        font-family:"PlayfairDisplay-Italic";
        font-size : 30px;
        
    `;

    return (
        <ContentSubjectWrapStyled>
            <ContentSubjectContent>Subject</ContentSubjectContent>
            <ContentSubjectContent>Content</ContentSubjectContent>
            <ContentSubjectContent>Date</ContentSubjectContent>
            <ContentSubjectContent>Writer</ContentSubjectContent>
        </ContentSubjectWrapStyled>
    )
}