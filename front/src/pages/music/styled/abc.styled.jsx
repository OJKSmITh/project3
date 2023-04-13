import styled from "styled-components";
import { useEffect, useState, useRef } from "react";
import abcjs from "abcjs";
import "abcjs/abcjs-audio.css";
import { fabric } from "fabric";
import MidiWriter from "midi-writer-js";
import MIDIPlayer from "midi-player-js";
import * as Tone from "tone";
import { Midi } from "@tonejs/midi";
import { Writer } from "midi-writer-js";

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

export const Playbutton = styled.button`
  border: 1px solid #fff;
  color: #fff;
  padding: 10px 7px;
  background: black;
  box-sizing: border-box;
  width: 120px;
  height: 38px;
  cursor: pointer;

  &:hover {
    border: 1px solid yellow;
    color: yellow;
  }
`;

export const ButtonLine_1 = styled.div`
  height: 38px;
  width: 300px;
  line-height: 38px;
  box-sizing: border-box;

  & > div {
    width: 100%;
    height: 19px;
    border-bottom: 1px solid #fff;
  }
`;

export const ButtonLine_2 = styled.div`
  height: 38px;
  width: 200px;
  line-height: 38px;
  box-sizing: border-box;

  & > div {
    width: 100%;
    height: 19px;
    border-bottom: 1px solid #fff;
  }
`;

export const ButtonLine_3 = styled.div`
  height: 38px;
  width: 360px;
  line-height: 38px;
  box-sizing: border-box;

  & > div {
    width: 100%;
    height: 19px;
    border-bottom: 1px solid #fff;
  }
`;

export const ButtonForm = styled.div`
  margin-top: 10px;
  border-left: 1px solid #fff;
  border-right: 1px solid #fff;
  box-sizing: border-box;
  width: 100%;
  display: flex;
  height: 38px;
`;

export const Abc = ({ response }) => {
  const canvasRef = useRef(null);

  const [abcString, setAbcString] = useState("");
  const [player, setPlayer] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [file, setFile] = useState(null);

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

  const playSounds = (midiData) => {
    // Convert the midiData to a Blob and create a URL for it
    const blob = new Blob([midiData], { type: "application/octet-stream" });
    const url = URL.createObjectURL(blob);

    // Fetch the MIDI data as an ArrayBuffer and parse it
    fetch(url)
      .then((response) => response.arrayBuffer())
      .then((arrayBuffer) => {
        const midi = new Midi(arrayBuffer);
        const synth = new Tone.PolySynth().toDestination();

        // Create a Tone.Part to play the MIDI notes
        const midiPart = new Tone.Part((time, event) => {
          synth.triggerAttackRelease(
            event.name,
            event.duration,
            time,
            event.velocity
          );
        }, midi.tracks[0].notes).start(0);

        // Start the Tone.Transport and set it to stop after the MIDI file's duration
        Tone.Transport.start();
        Tone.Transport.stop(`+${midi.duration}m`);

        setIsPlaying(true);

        // Stop the transport after the MIDI file's duration in milliseconds
        setTimeout(() => {
          Tone.Transport.cancel();
          Tone.Transport.stop();
          setIsPlaying(false);
        }, Tone.Time(midi.duration).toMilliseconds());

        // Stop the transport after a certain period of time (e.g., 30 seconds)
        setTimeout(() => {
          Tone.Transport.cancel();
          Tone.Transport.stop();
          setIsPlaying(false);
        }, 30000);
      });
  };

  const downloadMidi = () => {
    console.log(response.data);
    let noteMusic = response.data.music;

    const splitMusic = noteMusic.split("\n");
    const beforeDot = splitMusic[0];
    const afterDot = splitMusic.slice(1).join("");

    console.log("beforeDot:::", beforeDot);
    console.log("afterDot:::", afterDot);

    const noteLength = response.data.noteLength;
    console.log("noteMusic:", afterDot, "noteLength:", noteLength);

    const getDurationValue = (noteLength) => {
      const [numerator, denominator] = noteLength.split("/");
      return denominator;
    };

    const durationValue = getDurationValue(noteLength);

    const afterDotWithoutSpaces = afterDot.split(" ").join("");
    const pitch = afterDotWithoutSpaces.match(/[A-G]\d/g);

    console.log("ptich::::::::", pitch);
    console.log("durationValue::::::::", durationValue);

    const track = new MidiWriter.Track();

    console.log("track::::::::", track);
    const noteEvents = pitch.map(
      (note) =>
        new MidiWriter.NoteEvent({
          pitch: note,
          duration: `${durationValue}`,
        })
    );

    console.log("noteEvents:::", noteEvents);

    track.addEvent(noteEvents, function (event, index) {
      return { sequential: true };
    });

    console.log("track:::", track);

    const write = new Writer([track]);

    console.log("write:::", write);
    const midiData = write.buildFile();
    console.log("midiData:::", midiData);

    playSounds(midiData);
  };

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
      <ButtonForm>
        <ButtonLine_1>
          <div />
        </ButtonLine_1>
        <Playbutton onClick={downloadImage}>Download Image</Playbutton>
        <ButtonLine_2>
          <div />
        </ButtonLine_2>
        <Playbutton onClick={downloadMidi}>Play Sound</Playbutton>
        <ButtonLine_3>
          <div />
        </ButtonLine_3>
      </ButtonForm>
    </>
  );
};
