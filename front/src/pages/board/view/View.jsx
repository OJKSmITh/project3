import { ViewBox, SubjectBox, ContentBox, FileBox } from "./styled/view.styled"
import { useEffect } from "react"
import request from '../../../lib/request'

export const View = () => {

    useEffect(()=>{

    },[])

    return <>
        <ViewBox>
            <SubjectBox></SubjectBox>
            <ContentBox>teststest</ContentBox>
            <FileBox>파일데이터</FileBox>
        </ViewBox>
    </>
}