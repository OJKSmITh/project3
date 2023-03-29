import styled from "styled-components";
import { useState, useEffect } from "react";

export const Pianolayout = styled.div`
  width: 800px;
  height: 400px;
  background-color: #eee;
  display: flex;

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
      background-color: #d3b7d8;
      color: #fff;
    }
  }

  & .black {
    background-color: black;
    margin-right: -42px;
    margin-left: -42px;
    width: 130px;
    height: 250px;
    z-index: 1;
    position: relative;
    color: #eee;
    &:hover {
      background-color: #ffc2c3;
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
    background: red;
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
    console.log(event);
    switch (event.keyCode) {
      case 65: // A
        playSound("note1");
        event.target.classList.add("playing");
        break;
      case 87: // W
        playSound("note2");
        // console.log(event.keyCaode);
        event.target.classList.add("playing");
        break;
      case 83: // S
        playSound("note3");
        event.target.classList.add("playing");
        break;
      case 69: // E
        playSound("note4");
        event.target.classList.add("playing");
        break;
      case 68: // D
        playSound("note5");
        event.target.classList.add("playing");
        break;
      case 72: // H
        playSound("note6");
        event.target.classList.add("playing");
        break;
      case 85: // U
        playSound("note7");
        event.target.classList.add("playing");
        break;
      case 74: // J
        playSound("note8");
        event.target.classList.add("playing");
        break;
      case 73: // I
        playSound("note9");
        event.target.classList.add("playing");
        break;
      case 75: // K
        playSound("note10");
        event.target.classList.add("playing");
        break;
      case 79: // O
        playSound("note11");
        event.target.classList.add("playing");
        break;
      case 76: // L
        playSound("note12");
        event.target.classList.add("playing");
        break;
      default:
        break;
    }
  };

  const onKeyUp = (event) => {
    event.target.classList.remove("playing");
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
      <Pianolayout>
        <div
          className="key white"
          data-note="note1"
          onClick={() => playSound("note1")}
          onKeyDown={onKeyDown}
          onKeyUp={onKeyUp}
          tabIndex="0"
        >
          A
        </div>
        <div
          className="key black"
          data-note="note2"
          onClick={() => playSound("note2")}
          onKeyDown={onKeyDown}
          onKeyUp={onKeyUp}
          tabIndex="0"
        >
          W
        </div>
        <div
          className="key white"
          data-note="note3"
          onClick={() => playSound("note3")}
          onKeyDown={onKeyDown}
          onKeyUp={onKeyUp}
          tabIndex="0"
        >
          S
        </div>
        <div
          className="key black"
          data-note="note4"
          onClick={() => playSound("note4")}
          onKeyDown={onKeyDown}
          onKeyUp={onKeyUp}
          tabIndex="0"
        >
          E
        </div>
        <div
          className="key white"
          data-note="note5"
          onClick={() => playSound("note5")}
          onKeyDown={onKeyDown}
          onKeyUp={onKeyUp}
          tabIndex="0"
        >
          D
        </div>
        <div
          className="key white"
          data-note="note6"
          onClick={() => playSound("note6")}
          onKeyDown={onKeyDown}
          onKeyUp={onKeyUp}
          tabIndex="0"
        >
          H
        </div>
        <div
          className="key black"
          data-note="note7"
          onClick={() => playSound("note7")}
          onKeyDown={onKeyDown}
          onKeyUp={onKeyUp}
          tabIndex="0"
        >
          U
        </div>
        <div
          className="key white"
          data-note="note8"
          onClick={() => playSound("note8")}
          onKeyDown={onKeyDown}
          onKeyUp={onKeyUp}
          tabIndex="0"
        >
          J
        </div>
        <div
          className="key black"
          data-note="note9"
          onClick={() => playSound("note9")}
          onKeyDown={onKeyDown}
          onKeyUp={onKeyUp}
          tabIndex="0"
        >
          I
        </div>
        <div
          className="key white"
          data-note="note10"
          onClick={() => playSound("note10")}
          onKeyDown={onKeyDown}
          onKeyUp={onKeyUp}
          tabIndex="0"
        >
          K
        </div>
        <div
          className="key black"
          data-note="note11"
          onClick={() => playSound("note11")}
          onKeyDown={onKeyDown}
          onKeyUp={onKeyUp}
          tabIndex="0"
        >
          O
        </div>
        <div
          className="key white"
          data-note="note12"
          onClick={() => playSound("note12")}
          onKeyDown={onKeyDown}
          onKeyUp={onKeyUp}
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
