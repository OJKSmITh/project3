import styled from "styled-components";
import { useState, useEffect } from "react";

export const Pianolayout = styled.div`
  width: 700px;
  height: 400px;
  background-color: #eee;
  display: flex;
  margin-top: 100px;
  margin-left: 100px;

  & .key {
    background-color: white;
    height: 400px;
    width: 100px;
    border: 2px solid black;
    cursor: pointer;
  }

  & .white {
    background-color: white;
  }

  & .black {
    background-color: black;
    margin-right: -36px;
    margin-left: -36px;
    width: 70px;
    height: 250px;
    z-index: 1;
    position: relative;
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
      <Pianolayout>
        <div className="key white" data-note="note1" onClick={playSound}></div>
        <div className="key black" data-note="note2" onClick={playSound}></div>
        <div className="key white" data-note="note3" onClick={playSound}></div>
        <div className="key black" data-note="note4" onClick={playSound}></div>
        <div className="key white" data-note="note5" onClick={playSound}></div>
        <div className="key black" data-note="note6" onClick={playSound}></div>
        <div className="key white" data-note="note7" onClick={playSound}></div>
        <div className="key black" data-note="note8" onClick={playSound}></div>
        <div className="key white" data-note="note9" onClick={playSound}></div>
        <div className="key black" data-note="note10" onClick={playSound}></div>
        <div className="key white" data-note="note11" onClick={playSound}></div>
        <div className="key white" data-note="note12" onClick={playSound}></div>
      </Pianolayout>
    </>
  );
};
