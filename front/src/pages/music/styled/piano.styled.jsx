import styled from "styled-components";
import { useState, useEffect, useRef } from "react";

export const Pianolayout = styled.div`
  width: 800px;
  height: 400px;
  background-color: #eee;
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
    margin-right: -42px;
    margin-left: -42px;
    width: 130px;
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

export const Piano = () => {
  const [notes, setNotes] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadNotes = async () => {
      try {
        const response = await Promise.all([
          fetch(require("../../../common/sounds/notes/FX_piano01.mp3")),
          fetch(require("../../../common/sounds/notes/FX_piano02.mp3")),
          fetch(require("../../../common/sounds/notes/FX_piano03.mp3")),
          fetch(require("../../../common/sounds/notes/FX_piano04.mp3")),
          fetch(require("../../../common/sounds/notes/FX_piano05.mp3")),
          fetch(require("../../../common/sounds/notes/FX_piano06.mp3")),
          fetch(require("../../../common/sounds/notes/FX_piano07.mp3")),
          fetch(require("../../../common/sounds/notes/FX_piano08.mp3")),
          fetch(require("../../../common/sounds/notes/FX_piano09.mp3")),
          fetch(require("../../../common/sounds/notes/FX_piano10.mp3")),
          fetch(require("../../../common/sounds/notes/FX_piano11.mp3")),
          fetch(require("../../../common/sounds/notes/FX_piano12.mp3")),
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
    event.preventDefault();
    const findKeyElement = () => {
      for (const item of event.target.children) {
        if (item.innerHTML === event.key.toUpperCase()) {
          item.classList.add("playing");
          return item;
        }
      }
    };

    // myRef.current.focus();
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
      case 72: // H
        findKeyElement().click();
        break;
      case 85: // U
        findKeyElement().click();
        break;
      case 74: // J
        findKeyElement().click();
        break;
      case 73: // I
        findKeyElement().click();
        break;
      case 75: // K
        findKeyElement().click();
        break;
      case 79: // O
        findKeyElement().click();
        break;
      case 76: // L
        findKeyElement().click();
        break;
      default:
        break;
    }
  };

  const onKeyUp = (event) => {
    // event.target.classList.remove("playing");
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
        >
          A
        </div>
        <div
          className="key black"
          data-note="note2"
          onClick={() => playSound("note2")}
        >
          W
        </div>
        <div
          className="key white"
          data-note="note3"
          onClick={() => playSound("note3")}
          tabIndex="0"
        >
          S
        </div>
        <div
          className="key black"
          data-note="note4"
          onClick={() => playSound("note4")}
          tabIndex="0"
        >
          E
        </div>
        <div
          className="key white"
          data-note="note5"
          onClick={() => playSound("note5")}
          tabIndex="0"
        >
          D
        </div>
        <div
          className="key white"
          data-note="note6"
          onClick={() => playSound("note6")}
          tabIndex="0"
        >
          H
        </div>
        <div
          className="key black"
          data-note="note7"
          onClick={() => playSound("note7")}
          tabIndex="0"
        >
          U
        </div>
        <div
          className="key white"
          data-note="note8"
          onClick={() => playSound("note8")}
          tabIndex="0"
        >
          J
        </div>
        <div
          className="key black"
          data-note="note9"
          onClick={() => playSound("note9")}
          tabIndex="0"
        >
          I
        </div>
        <div
          className="key white"
          data-note="note10"
          onClick={() => playSound("note10")}
          tabIndex="0"
        >
          K
        </div>
        <div
          className="key black"
          data-note="note11"
          onClick={() => playSound("note11")}
          tabIndex="0"
        >
          O
        </div>
        <div
          className="key white"
          data-note="note12"
          onClick={() => playSound("note12")}
          tabIndex="0"
        >
          L
        </div>
      </Pianolayout>
    </>
  );
};

/*
export const Piano = () => {
  const [notes, setNotes] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadNotes = async () => {
      try {
        const response = await Promise.all([
          fetch(require("../../../common/sounds/notes/FX_piano01.mp3")),
          fetch(require("../../../common/sounds/notes/FX_piano02.mp3")),
          fetch(require("../../../common/sounds/notes/FX_piano03.mp3")),
          fetch(require("../../../common/sounds/notes/FX_piano04.mp3")),
          fetch(require("../../../common/sounds/notes/FX_piano05.mp3")),
          fetch(require("../../../common/sounds/notes/FX_piano06.mp3")),
          fetch(require("../../../common/sounds/notes/FX_piano07.mp3")),
          fetch(require("../../../common/sounds/notes/FX_piano08.mp3")),
          fetch(require("../../../common/sounds/notes/FX_piano09.mp3")),
          fetch(require("../../../common/sounds/notes/FX_piano10.mp3")),
          fetch(require("../../../common/sounds/notes/FX_piano11.mp3")),
          fetch(require("../../../common/sounds/notes/FX_piano12.mp3")),
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

  const playSound = (event) => {
    const note = event.target.getAttribute("data-note");
    const audio = new Audio(notes[note]);
    audio.currentTime = 0;
    audio.play();
    event.target.classList.add("active");
    audio.addEventListener("ended", () => {
      event.target.classList.remove("active");
    });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Pianolayout
        onKeyDown={(e) => {
          console.log(e.key);
        }}
        tabIndex="0"
      >
        <div className="key white" data-note="note1" onClick={playSound}>
          A
        </div>
        <div className="key black" data-note="note2" onClick={playSound}>
          W
        </div>
        <div className="key white" data-note="note3" onClick={playSound}>
          S
        </div>
        <div className="key black" data-note="note4" onClick={playSound}>
          E
        </div>
        <div className="key white" data-note="note5" onClick={playSound}>
          D
        </div>
        <div className="key white" data-note="note6" onClick={playSound}>
          H
        </div>
        <div className="key black" data-note="note7" onClick={playSound}>
          U
        </div>
        <div className="key white" data-note="note8" onClick={playSound}>
          J
        </div>
        <div className="key black" data-note="note9" onClick={playSound}>
          I
        </div>
        <div className="key white" data-note="note10" onClick={playSound}>
          K
        </div>
        <div className="key black" data-note="note11" onClick={playSound}>
          O
        </div>
        <div className="key white" data-note="note12" onClick={playSound}>
          L
        </div>
      </Pianolayout>
    </>
  );
};
*/
