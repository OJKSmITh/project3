import React, {useRef} from 'react';
import styled from 'styled-components';


const ImageButtonStyled = styled.form`
    width:250px;
    height:50px;
    border-radius:50px;
    background-color:var(--grey-color);
    display:flex;
    justify-content:center;
    align-items:center;
    margin-left:20px;
    overflow:hidden;
    &:hover {
        cursor:pointer;
    }
    & > input {
        border:none;
        background-color:var(--grey-color);
        font-size:20px;
        margin-left: 85px;
    }
`

const Input = styled.input`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
`;

const Button = styled.button`
  background-color: var(--grey-color);
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size :25px;
  cursor: pointer;
`;

export const ImageButton = () => {
    const inputRef = useRef(null);
  
    const handleFileChange = (event) => {
      const file = event.target.files[0];
      const formData = new FormData();
      formData.append('file', file);
    };
  
    return (
      <ImageButtonStyled>
        <Button>이미지 파일 업로드<Input type="file" ref={inputRef} onChange={handleFileChange} /></Button>
      </ImageButtonStyled>
    );
  };