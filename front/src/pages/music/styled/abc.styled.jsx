import styled from "styled-components";
import { useEffect, useState, useRef } from "react";
import abcjs from "abcjs";
import "abcjs/abcjs-audio.css";
import { saveAs } from "file-saver";
import { Canvg } from "canvg";
import { fabric } from "fabric";

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

  const canvasRef = useRef(null);

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

  const downloadImage = () => {
    const svg = document.querySelector("#paper svg");

    // SVG의 스타일과 속성을 반영하도록 수정
    const svgString = new XMLSerializer().serializeToString(svg);
    const encodedData = window.btoa(svgString);

    fabric.loadSVGFromString(svgString, (objects, options) => {
      const loadedObjects = fabric.util.groupSVGElements(objects, options);
      const canvas = new fabric.Canvas(null, {
        width: svg.getAttribute("width"),
        height: svg.getAttribute("height"),
      });

      canvas.add(loadedObjects);
      canvas.renderAll();

      const dataUrl = canvas.toDataURL({
        format: "png",
      });

      const link = document.createElement("a");
      link.download = "score.png";
      link.href = dataUrl;
      link.click();
    });
  };

  return (
    <>
      <Abclayout>
        <div id="paper"></div>
      </Abclayout>
      <canvas ref={canvasRef} style={{ display: "none" }} />
      <button onClick={downloadImage}>Download Image</button>
    </>
  );
};
