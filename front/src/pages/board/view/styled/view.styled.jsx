import styled from 'styled-components'
import request from '../../../../lib/request'

export const  ViewBox = styled.div`
    & > div:nth-child(1) {
        display: flex;
        align-items: center;
        padding-left: 15px;
    }
    padding: 15px 0 0 0;
    margin: 25px auto;
    width: 1750px;
    height: 875px;
    background: #D9D9D9;
`


export const SubjectBox = ({subject}) => {
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
            <SubContent>제목:</SubContent><SubContent>{subject}</SubContent>
        </Subject>
    )

}


export const ContentBox = styled.div`
    font-size: 30px;
    line-height: 36px;
    font-weight: 400;
    margin: auto;
    background: #A6B8C4;
    width: 1610px;
    height: 680px;
    padding: 15px;
    box-sizing: border-box;
`

export const FileBox = ({children}) => {

    const FileSpan = styled.span`
        margin-left: 70px;
        font-weight: 400;
        font-size: 20px;
        line-height: 36px;
    `

    const fileDownload = async (e) => {
        e.preventDefault()
        console.log(e.target.innerHTML)
        // const res = await request.get(`/download/`)
        
    }

    return (<>
        <FileSpan>파일: </FileSpan><span><a onClick={fileDownload}>{children}</a></span>
    </> 
    )
}