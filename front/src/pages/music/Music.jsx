import {
  Piano,
  Wrap,
  GPT,
  Musicform,
  ButtonWrap,
  PianoForm,
  PianoMenu,
  MusicBar,
} from "./styled/index.jsx";
import { Button } from "../../common/index.jsx";
import { useState } from "react";
import { useEffect } from "react";

export const Music = () => {
  const [pianoState, setPianoState] = useState("");

  useEffect(() => {
    console.log("=============", pianoState);
  }, [pianoState]);
  return (
    <>
      <Wrap>
        <MusicBar />
        <Musicform>
          <GPT pianoState={pianoState}></GPT>
          <PianoForm>
            <PianoMenu></PianoMenu>
            <Piano
              pianoState={pianoState}
              setPianoState={setPianoState}
            ></Piano>
          </PianoForm>
          <ButtonWrap>
            <Button color={"color2"} textcolor={"color3"}>
              Chat Gpt!
            </Button>
          </ButtonWrap>
        </Musicform>
        <MusicBar />
      </Wrap>
    </>
  );
};
