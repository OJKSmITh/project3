import {
  Piano,
  Wrap,
  GPT,
  Musicform,
  ButtonWrap,
  PianoForm,
  PianoMenu,
  MusicBar,
  Abc,
} from "./styled/index.jsx";
import { Button } from "../../common/index.jsx";
import { useState } from "react";
import { useEffect } from "react";
import request from "../../lib/request.js";

export const Music = () => {
  const [pianoState, setPianoState] = useState("");
  const [response, setResponse] = useState(null);

  useEffect(() => {
    console.log("=============", pianoState);
  }, [pianoState]);

  const gptSubmit = async () => {
    const body = { pianoState };
    const response = await request.post("/gpt", body);
    console.log("Front:::::::", response.data);
    setResponse(response);
  };

  return (
    <>
      <Wrap>
        <MusicBar />
        <Musicform>
          <GPT pianoState={pianoState}></GPT>
          <Abc response={response}></Abc>
          <PianoForm>
            <PianoMenu></PianoMenu>
            <Piano
              pianoState={pianoState}
              setPianoState={setPianoState}
            ></Piano>
          </PianoForm>
          <ButtonWrap>
            <Button
              color={"color2"}
              textcolor={"color3"}
              onClick={gptSubmit}
              pianoState={pianoState}
            >
              Chat Gpt!
            </Button>
          </ButtonWrap>
        </Musicform>
        <MusicBar />
      </Wrap>
    </>
  );
};
