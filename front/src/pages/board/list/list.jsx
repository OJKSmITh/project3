import {ListWrap} from "./styled"
import { Subject, ContentSubjectWrap, ContentWordWrap, ContentWrap, ListWriteButton } from './styled'


export const List = () =>{
    return (
        <ListWrap>
            <Subject word={"Notice"}/>
                <ContentWrap>
                    <ContentSubjectWrap/>
                    <ContentWordWrap word={"음악"}/>
                </ContentWrap>
            <ListWriteButton/> 
        </ListWrap>
        )
    
} 