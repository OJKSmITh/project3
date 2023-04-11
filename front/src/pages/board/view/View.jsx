import { ViewBox, SubjectBox, ContentBox, FileBox } from "./styled/view.styled"
import { useEffect } from "react"
import { useState } from "react"
import {useParams} from 'react-router-dom'
import request from '../../../lib/request'


export const View = () => {
    const {id} = useParams()    
    const [boardState, setBoardState] = useState({})                                                                                          
    useEffect(()=>{
        (async()=>{
            const {data} = await request.get(`/board/view/${id}`)
            console.log(data)
            setBoardState(data)
        })()
    },[])


    return <>
        <ViewBox>
            <SubjectBox subject={boardState.subject}></SubjectBox>
            <ContentBox>{boardState.content}</ContentBox>
            <FileBox>{boardState.uploadImg}</FileBox>
        </ViewBox>
    </>
}