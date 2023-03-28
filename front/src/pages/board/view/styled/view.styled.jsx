import styled from 'styled-components'


export const  ViewBox = styled.div`
    padding: 15px 0 0 0;
    margin: 25px auto;
    width: 1750px;
    height: 875px;
    background: #D9D9D9;
`


export const SubjectBox = () => {
    const Subject = styled.div`
        font-size: 30px;
        margin: 15px 70px;
        background: #A6B8C4;
        height: 65px;
    `

    const SubContent = styled.span`
        font-size: 30px;
        line-height: 36px;
        font-weight: 400;
    `

    return (
        <Subject>
            <SubContent>제목: </SubContent><SubContent>ChatGPT에게 어그로끄는 법을 물어보았다.</SubContent>
        </Subject>
    )

}


export const ContentBox = styled.div`
    font-size: 30px;
    line-height: 36px;
    font-weight: 400;
    margin: 15px auto 0 auto;
    background: #A6B8C4;
    width: 1610px;
    height: 680px;
`

export const FileBox = () => {

    const FileSpan = styled.span`
        font-weight: 400;
        font-size: 30px;
        line-height: 36px;
    `

    return (
        <FileSpan></FileSpan>
    )
}