import { ListWrap, Subject, ContentSubjectWrap, ContentWordWrap, ContentWrap, ListWriteButton } from './styled'
import {useSelector} from 'react-redux'
import { useEffect, useState } from 'react'
import request from '../../../lib/request'
import { NavLink } from 'react-router-dom'

export const List = () =>{
    const { loadding, isLogin } = useSelector(state=>state.user)
    const [ boardList, setBoardList ] = useState([])

    useEffect( ()=>{
        try{
            (async()=>{
                const {data} = await request.get('/board')
                setBoardList(data)
            })()
        }catch(e){
            console.log(e.message)
        }
    },[])



    return (
        <>
            {
                !loadding ? <>Loadding중입니다</>
                :(
                <ListWrap>
                    <Subject word={"Notice"}/>
                    <ContentWrap>
                        <ContentSubjectWrap/>
                        {
                            boardList.map( board => {
                                return (
                                <NavLink to={`view/${board.id}`} key={board.id}>
                                    <ContentWordWrap 
                                    subject={board.subject} 
                                    content={board.content} 
                                    date={
                                            new Date(board.createdAt).toLocaleDateString('ko-KR').replace(/\./g, '').replace(/\s/g, '-')
                                        } 
                                        nickname={board.nickname}/>
                                </NavLink>
                                )
                            })
                        }
                        
                    </ContentWrap>
                    {
                        isLogin ?  <ListWriteButton/>  : <></>
                    }
                </ListWrap>
                )
            }
        </>
        
        
    )
} 