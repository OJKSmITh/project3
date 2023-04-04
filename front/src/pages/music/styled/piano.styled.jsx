import styled from "styled-components";
import { useState, useEffect } from "react";

export const Pianolayout = styled.div`
  width: 1100px;
  height: 400px;
  display: flex;

  &:focus {
    outline: none;
  }

  & .key {
    background-color: white;
    height: 400px;
    width: 200px;
    border: 2px solid black;
    cursor: pointer;
  }

  & .white {
    background-color: white;
    &:hover {
      background: linear-gradient(
        1.03deg,
        rgba(12, 36, 255, 0.71) 0.26%,
        rgba(251, 8, 197, 0.34) 98.57%
      );
      color: #fff;
    }
  }

  & .black {
    background-color: black;
    margin-right: -30px;
    margin-left: -30px;
    width: 140px;
    height: 250px;
    z-index: 2;
    position: relative;
    color: #eee;
    &:hover {
      background: linear-gradient(
        1.03deg,
        rgba(12, 36, 255, 0.71) 0.26%,
        rgba(251, 8, 197, 0.34) 98.57%
      );
      color: #fff;
    }
  }

  & > div {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    font-size: 30px;
  }

  & .playing {
    background: linear-gradient(
      1.03deg,
      rgba(12, 36, 255, 0.71) 0.26%,
      rgba(251, 8, 197, 0.34) 98.57%
    );
    color: #fff;
  }
`;

export const Piano = ({ pianoState, setPianoState }) => {
  // console.log(noteState, setNoteState);
  const [notes, setNotes] = useState({});
  const [loading, setLoading] = useState(true);
  const [noteArray, setNoteArray] = useState([]);

  // console.log(" :::::: ", pianoState, setPianoState);

  useEffect(() => {
    const loadNotes = async () => {
      try {
        const response = await Promise.all([
          fetch(require("../../../common/sounds/notes/piano01.mp3")),
          fetch(require("../../../common/sounds/notes/piano02.mp3")),
          fetch(require("../../../common/sounds/notes/piano03.mp3")),
          fetch(require("../../../common/sounds/notes/piano04.mp3")),
          fetch(require("../../../common/sounds/notes/piano05.mp3")),
          fetch(require("../../../common/sounds/notes/piano06.mp3")),
          fetch(require("../../../common/sounds/notes/piano07.mp3")),
          fetch(require("../../../common/sounds/notes/piano08.mp3")),
          fetch(require("../../../common/sounds/notes/piano09.mp3")),
          fetch(require("../../../common/sounds/notes/piano10.mp3")),
          fetch(require("../../../common/sounds/notes/piano11.mp3")),
          fetch(require("../../../common/sounds/notes/piano12.mp3")),
          fetch(require("../../../common/sounds/notes/piano13.mp3")),
          fetch(require("../../../common/sounds/notes/piano14.mp3")),
          fetch(require("../../../common/sounds/notes/piano15.mp3")),
          fetch(require("../../../common/sounds/notes/piano16.mp3")),
          fetch(require("../../../common/sounds/notes/piano17.mp3")),
          fetch(require("../../../common/sounds/notes/piano18.mp3")),
          fetch(require("../../../common/sounds/notes/piano19.mp3")),
          fetch(require("../../../common/sounds/notes/piano20.mp3")),
          fetch(require("../../../common/sounds/notes/piano21.mp3")),
          fetch(require("../../../common/sounds/notes/piano22.mp3")),
          fetch(require("../../../common/sounds/notes/piano23.mp3")),
          fetch(require("../../../common/sounds/notes/piano24.mp3")),
        ]);
        const notes = {};
        response.forEach(async (res, index) => {
          const blob = await res.blob();
          notes[`note${index + 1}`] = URL.createObjectURL(blob);
        });

        setNotes(notes);
        setLoading(false);
      } catch (err) {
        console.error(err);
      }
    };
    loadNotes();
  }, []);

  const onKeyDown = (event) => {
    const findKeyElement = () => {
      for (const item of event.target.children) {
        if (item.innerHTML === event.key.toUpperCase()) {
          item.classList.add("playing");
          return item;
        }
      }
    };

    const keyElement = findKeyElement();
    if (!keyElement) {
      return;
    }

    const noteText = findKeyElement().getAttribute("note");
    setNoteArray([...noteArray, noteText]);

    if (noteArray.length === 5) {
      // console.log(noteArray);
      setPianoState(noteArray);
      setNoteArray([]);
    }

    switch (event.keyCode) {
      case 65: // A
        findKeyElement().click();
        break;
      case 87: // W
        findKeyElement().click();
        break;
      case 83: // S
        findKeyElement().click();
        break;
      case 69: // E
        findKeyElement().click();
        break;
      case 68: // D
        findKeyElement().click();
        break;
      case 70: // F
        findKeyElement().click();
        break;
      case 84: // T
        findKeyElement().click();
        break;
      case 71: // G
        findKeyElement().click();
        break;
      case 89: // Y
        findKeyElement().click();
        break;
      case 72: // H
        findKeyElement().click();
        break;
      case 85: // U
        findKeyElement().click();
        break;
      case 74: // J
        findKeyElement().click();
        break;
      case 75: // K
        findKeyElement().click();
        break;
      case 73: // I
        findKeyElement().click();
        break;
      case 76: // L
        findKeyElement().click();
        break;
      case 79: // O
        findKeyElement().click();
        break;
      case 80: // P
        findKeyElement().click();
        break;
      case 90: // Z
        findKeyElement().click();
        break;
      case 88: // X
        findKeyElement().click();
        break;
      case 67: // C
        findKeyElement().click();
        break;
      case 86: // V
        findKeyElement().click();
        break;
      case 66: // B
        findKeyElement().click();
        break;
      case 78: // N
        findKeyElement().click();
        break;
      case 77: // M
        findKeyElement().click();
        break;
      default:
        console.warn(`Unsupported key pressed: ${event.keyCode}`);
        break;
    }
  };

  const onKeyUp = (event) => {
    for (const item of event.target.children) {
      item.classList.remove("playing");
    }
  };

  const playSound = (note) => {
    const audio = new Audio(notes[note]);
    audio.currentTime = 0;
    audio.play();
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Pianolayout onKeyDown={onKeyDown} onKeyUp={onKeyUp} tabIndex="0">
        <div
          className="key white"
          data-note="note1"
          onClick={() => playSound("note1")}
          note="C"
        >
          A
        </div>
        <div
          className="key black"
          data-note="note2"
          onClick={() => playSound("note2")}
          note="C#"
        >
          W
        </div>
        <div
          className="key white"
          data-note="note3"
          onClick={() => playSound("note3")}
          note="D"
        >
          S
        </div>
        <div
          className="key black"
          data-note="note4"
          onClick={() => playSound("note4")}
          note="D#"
        >
          E
        </div>
        <div
          className="key white"
          data-note="note5"
          onClick={() => playSound("note5")}
          note="E"
        >
          D
        </div>
        <div
          className="key white"
          data-note="note6"
          onClick={() => playSound("note6")}
          note="F"
        >
          F
        </div>
        <div
          className="key black"
          data-note="note7"
          onClick={() => playSound("note7")}
          note="F#"
        >
          T
        </div>
        <div
          className="key white"
          data-note="note8"
          onClick={() => playSound("note8")}
          note="G"
        >
          G
        </div>
        <div
          className="key black"
          data-note="note9"
          onClick={() => playSound("note9")}
          note="G#"
        >
          Y
        </div>
        <div
          className="key white"
          data-note="note10"
          onClick={() => playSound("note10")}
          note="A"
        >
          H
        </div>
        <div
          className="key black"
          data-note="note11"
          onClick={() => playSound("note11")}
          note="A#"
        >
          U
        </div>
        <div
          className="key white"
          data-note="note12"
          onClick={() => playSound("note12")}
          note="B"
        >
          J
        </div>
        <div
          className="key white"
          data-note="note13"
          onClick={() => playSound("note13")}
          note="C2"
        >
          K
        </div>
        <div
          className="key black"
          data-note="note14"
          onClick={() => playSound("note14")}
          note="C2#"
        >
          I
        </div>
        <div
          className="key white"
          data-note="note15"
          onClick={() => playSound("note15")}
          note="D2"
        >
          L
        </div>
        <div
          className="key black"
          data-note="note16"
          onClick={() => playSound("note16")}
          note="D2#"
        >
          O
        </div>
        <div
          className="key white"
          data-note="note17"
          onClick={() => playSound("note17")}
          note="E2"
        >
          P
        </div>
        <div
          className="key white"
          data-note="note18"
          onClick={() => playSound("note18")}
          note="F2"
        >
          Z
        </div>
        <div
          className="key black"
          data-note="note19"
          onClick={() => playSound("note19")}
          note="F2#"
        >
          X
        </div>
        <div
          className="key white"
          data-note="note20"
          onClick={() => playSound("note20")}
          note="G2"
        >
          C
        </div>
        <div
          className="key black"
          data-note="note21"
          onClick={() => playSound("note21")}
          note="G2#"
        >
          V
        </div>
        <div
          className="key white"
          data-note="note22"
          onClick={() => playSound("note22")}
          note="A2"
        >
          B
        </div>
        <div
          className="key black"
          data-note="note23"
          onClick={() => playSound("note23")}
          note="A2#"
        >
          N
        </div>
        <div
          className="key white"
          data-note="note24"
          onClick={() => playSound("note24")}
          note="B2"
        >
          M
        </div>
      </Pianolayout>
    </>
  );
};
