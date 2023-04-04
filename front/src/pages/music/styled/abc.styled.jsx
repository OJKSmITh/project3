import styled from "styled-components";
import { useEffect, useState } from "react";
import abcjs from "abcjs";
import "abcjs/abcjs-audio.css";

export const Abclayout = styled.div`
  background: #fff;
  width: 1100px;
  height: 200px;
  box-sizing: border-box;
  margin-top: 50px;
  display: flex;
  justify-content: center;
  overflow: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Abc = ({ response }) => {
  console.log("GPT ::::::::::::", response);
  // console.log(pianoState);

  console.log(abcjs);

  const [abcString, setAbcString] = useState("");

  useEffect(() => {
    if (response && response.data) {
      const music = response.data.music;
      const noteContent = response.data.noteContent;
      const noteLength = response.data.noteLength;
      const referenceNumber = response.data.referenceNumber;
      const timeSignature = response.data.timeSignature;

      const abcString = `X:${referenceNumber}\nT:${music}\nM:${timeSignature}\nL:${noteLength}\nK:C\n${noteContent}`;

      setAbcString(abcString);

      console.log("abcString:::", abcString);
      const staffWidth = Math.min(1100, window.innerWidth - 100);
      abcjs.renderAbc("paper", `${abcString}`, { staffWidth });
    }
  }, [response, setAbcString]);
  return (
    <>
      <Abclayout>
        <div id="paper"></div>
      </Abclayout>
    </>
  );
};
