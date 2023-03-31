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

export const Music = () => {
  const [pianoState, setPianoState] = useState();

  return (
    <>
      <Wrap>
        <MusicBar />
        <Musicform>
          <GPT></GPT>
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
