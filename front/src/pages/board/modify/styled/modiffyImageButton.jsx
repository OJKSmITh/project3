import React, { useRef } from 'react';
import styled from 'styled-components';

const ImageButtonStyled = styled.div`
  width: 250px;
  height: 50px;
  border-radius: 50px;
  background-color: var(--grey-color);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
  &:hover {
    cursor: pointer;
  }
`;

const Label = styled.label`
  position: relative;
  display: inline-block;
  background-color: var(--grey-color);
  color: var(--black-color);
  border: none;
  font-size:22px;
  padding: 10px 20px;
  cursor: pointer;
`;

const Input = styled.input`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
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
      <Label>
        이미지 파일 업로드
        <Input type="file" ref={inputRef} onChange={handleFileChange} />
      </Label>
    </ImageButtonStyled>
  );
};