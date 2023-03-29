import styled from 'styled-components';
import { Icon } from '@iconify/react';

const FiledivStyled = styled.div`
    width: 1100px;
    height: 55px;
    display:flex;
    margin-top:520px;
    margin-left: 20px;
`

const FileComponent = () =>{
    return <Icon icon="material-symbols:file-copy-outline" />
}

const FileNameComponent = ({filename}) =>{
    return (
        <div>"file 이름"</div>
    )
}

export const FileDiv = ()=>{
    return (
        <FiledivStyled>
            파일 :
            <FileComponent/>
            <FileNameComponent/>
        </FiledivStyled>
    )
}