
import React, {useRef} from 'react';
import styled from 'styled-components';

const Mp3Buttonstyled = styled.div`
    width:250px;
    height:50px;
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:75px;
    background-color: var(--grey-color);
    margin-left:20px;

    & >  input {
        display:none;
    }
    &:hover{
        cursor: pointer;
    }

    & > button {
        width:250px;
        height:50px;
        font-size:25px;
        display:flex;
        justify-content:center;
        align-items:center;
        border-radius:75px;
        background-color: var(--grey-color);
        border:none;
    }
`

export const Mp3Button = ({ onFileSelect }) =>{
    const fileInputRef = useRef(null);

    const handleButtonClick = () => {
        fileInputRef.current.click();
    };

    const handleFileSelect = (e) => {
        const file = e.target.files[0];
        onFileSelect(file);
    };

    return (
        <Mp3Buttonstyled>
            <input 
                type="file"
                accept='audio/*' 
                ref={fileInputRef} 
                onchange={handleFileSelect} />
            <button onClick={handleButtonClick}>음악 파일 업로드</button>
        </Mp3Buttonstyled>
    )
}