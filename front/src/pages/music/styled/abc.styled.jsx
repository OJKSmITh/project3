import styled from "styled-components";
import { useEffect, useState, useRef } from "react";
import abcjs from "abcjs";
import "abcjs/abcjs-audio.css";
import { fabric } from "fabric";
// import MidiWriter from "midi-writer-js";
// import MIDIPlayer from "midi-player-js";
// import * as Tone from "tone";
// import MIDIPlayer from 'midi-player-js';

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
  const canvasRef = useRef(null);

  const [abcString, setAbcString] = useState("");
  const [player, setPlayer] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [file, setFile] = useState(null);

  console.log(response);

  useEffect(() => {
    if (response && response.data) {
      const title = response.data.title;
      const music = response.data.music;
      const noteContent = response.data.noteContent;
      const noteLength = response.data.noteLength;
      const referenceNumber = response.data.referenceNumber;
      const timeSignature = response.data.timeSignature;

      const abcString = `X:${referenceNumber}\nT:${title}\n${music}\nM:${timeSignature}\nL:${noteLength}\nK:C\n${noteContent}`;

      setAbcString(abcString);

      console.log("ABC 에서 가공한 abcString:::", abcString);

      const staffWidth = Math.min(1100, window.innerWidth - 100);
      abcjs.renderAbc("paper", `${abcString}`, { staffWidth });
    }
  }, [response, setAbcString]);

  // const playSounds = async (blob) => {
  //   const noteContent = response.data.noteContent;
  //   const noteLength = response.data.noteLength;
  //   console.log("noteContent:", noteContent, "noteLength:", noteLength);

  //   // 'CAC#EG'를 ['C', 'A', 'C#', 'E', 'G']로 변경
  //   const pitchArray = noteContent.match(/[A-G]#*/g);

  //   // 각 음표별 duration 설정
  //   const duration = noteLength === "1/8" ? "1/8" : "1/4";

  //   // pitchArray와 duration을 이용하여 notes를 만들어줍니다.
  //   const notes = pitchArray.map((pitch) => `${pitch}_4_${duration}`).join(" ");

  //   console.log("notes::::::::", notes);

  //   const track = new MidiWriter.Track();
  //   const noteEvents = [
  //     new MidiWriter.NoteEvent({
  //       pitch: notes,
  //       duration: noteLength,
  //     }),
  //   ];

  //   console.log("noteEvents", noteEvents);

  //   track.addEvent(noteEvents, function (event, index) {
  //     return { sequential: true };
  //   });

  //   console.log("track::::", track);

  //   const writer = new MidiWriter.Writer([track]); // track 을 인코딩
  //   let dataUri = writer.base64();

  //   // MIDI 파일 데이터의 첫 번째 바이트를 77로 수정합니다.
  //   const test = new Audio(`${process.env.PUBLIC_URL}/tone/samsung.mid`);

  //   async function getFile() {
  //     const fileUrl = process.env.PUBLIC_URL + "/samsung.mid";

  //     return fetch(fileUrl)
  //       .then((response) => response.text())
  //       .then((fileContent) => {
  //         const fileType = "audio/midi"; // 파일의 MIME 타입

  //         const file = new File([fileContent], "samsung.mid", {
  //           type: fileType,
  //         });

  //         return file;
  //       });
  //   }

  //   let test2 = await getFile();
  //   console.log("11111111111111111", test2);
  //   let binary = blob;
  //   console.log("============", binary);
  //   let bytes = btoa(
  //     new Uint8Array(binary).reduce(
  //       (data, byte) => data + String.fromCharCode(byte),
  //       ""
  //     )
  //   );
  //   console.log("================", bytes);

  //   const midiPlayer = new MIDIPlayer.Player();

  //   const synth = new Tone.Synth().toDestination();

  //   midiPlayer.loadDataUri("data:audio/midi;base64," + bytes);

  //   midiPlayer.on("midiEvent", (event) => {
  //     if (event.name === "Note on") {
  //       synth.triggerAttack(event.noteName, event.time, event.velocity);
  //     } else if (event.name === "Note off") {
  //       synth.triggerRelease(event.noteName, event.time);
  //     }
  //   });

  //   setPlayer(midiPlayer);
  // };

  // const downloadMidi = () => {
  //   const noteContent = response.data.noteContent;
  //   const noteLength = response.data.noteLength;
  //   console.log("noteContent:", noteContent, "noteLength:", noteLength);

  //   const track = new MidiWriter.Track();
  //   const noteEvents = [
  //     new MidiWriter.NoteEvent({
  //       pitch: [noteContent],
  //       duration: `${noteLength}`,
  //     }),
  //   ];

  //   console.log(noteEvents);
  //   track.addEvent(noteEvents, function (event, index) {
  //     return { sequential: true };
  //   });

  //   const write = new MidiWriter.Writer([track]);
  //   const blob = new Blob([write.dataUri()], { type: "audio/midi" });
  //   console.log(blob);
  //   // saveAs(blob, "score.mid");

  //   playSounds(blob);
  // };

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
      {/* <button onClick={downloadMidi}>Play Sound</button> */}
    </>
  );
};
