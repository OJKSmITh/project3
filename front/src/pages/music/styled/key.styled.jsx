import styled from "styled-components";
import C from "../../../common/sounds/notes/FX_piano01.mp3";
import Csharp from "../../../common/sounds/notes/FX_piano02.mp3";
import D from "../../../common/sounds/notes/FX_piano03.mp3";
import Dsharp from "../../../common/sounds/notes/FX_piano04.mp3";
import E from "../../../common/sounds/notes/FX_piano05.mp3";
import F from "../../../common/sounds/notes/FX_piano06.mp3";
import Fsharp from "../../../common/sounds/notes/FX_piano07.mp3";
import G from "../../../common/sounds/notes/FX_piano08.mp3";
import Gsharp from "../../../common/sounds/notes/FX_piano09.mp3";
import A from "../../../common/sounds/notes/FX_piano10.mp3";
import Asharp from "../../../common/sounds/notes/FX_piano11.mp3";
import B from "../../../common/sounds/notes/FX_piano12.mp3";

export const Pianolayout = styled.div`
  width: 700px;
  height: 400px;
  background-color: #eee;
  display: flex;
  margin-top: 100px;
  margin-left: 100px;
  /* align-items: flex-end; */
  /* flex-direction: row; */

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
  const playSound = (event) => {
    const note = event.target.getAttribute("data-note");
    const audio = new Audio();
    audio.src = eval(note);
    audio.currentTime = 0;
    audio.play();
    event.target.classList.add("active");
    audio.addEventListener("ended", () => {
      event.target.classList.remove("active");
    });
  };

  return (
    <>
      <Pianolayout>
        <div
          className="key white"
          data-note={C.default}
          onClick={playSound}
        ></div>
        <div
          className="key black"
          data-note={Csharp.default}
          onClick={playSound}
        ></div>
        <div
          className="key white"
          data-note={D.default}
          onClick={playSound}
        ></div>
        <div
          className="key black"
          data-note={Dsharp.default}
          onClick={playSound}
        ></div>
        <div
          className="key white"
          data-note={E.default}
          onClick={playSound}
        ></div>
        <div
          className="key white"
          data-note={F.default}
          onClick={playSound}
        ></div>
        <div
          className="key black"
          data-note={Fsharp.default}
          onClick={playSound}
        ></div>
        <div
          className="key white"
          data-note={G.default}
          onClick={playSound}
        ></div>
        <div
          className="key black"
          data-note={Gsharp.default}
          onClick={playSound}
        ></div>
        <div
          className="key white"
          data-note={A.default}
          onClick={playSound}
        ></div>
        <div
          className="key black"
          data-note={Asharp.default}
          onClick={playSound}
        ></div>
        <div
          className="key white"
          data-note={B.default}
          onClick={playSound}
        ></div>
      </Pianolayout>
    </>
  );
};
