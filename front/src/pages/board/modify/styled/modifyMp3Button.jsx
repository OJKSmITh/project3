import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Mp3ButtonStyled = styled.div`
  width: 250px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 75px;
  background-color: var(--grey-color);
  margin-left: 20px;

  & > input {
    display: none;
  }

  &:hover {
    cursor: pointer;
  }

  & > button {
    width: 250px;
    height: 50px;
    font-size: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 75px;
    background-color: var(--grey-color);
    border: none;
  }
`;

export const Mp3Button = () => {
  const [file, setFile] = useState(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileSelect = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    uploadFile(selectedFile);
  };

  const fileInputRef = React.useRef(null);

  const uploadFile = (file) => {
    const formData = new FormData();
    formData.append('file', file);

    axios
      .post('/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Mp3ButtonStyled>
      <input
        type="file"
        accept="audio/*"
        ref={fileInputRef}
        onChange={handleFileSelect}
      />
      <button onClick={handleButtonClick}>
        {file ? file.name : '음악 파일 업로드'}
      </button>
    </Mp3ButtonStyled>
  );
};