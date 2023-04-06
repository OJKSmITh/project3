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
import request from "../../lib/request.js";
import { useSelector } from "react-redux";

export const Music = () => {
  const [pianoState, setPianoState] = useState("");
  const [response, setResponse] = useState(null);
  const { isLogin } = useSelector((state) => state.user);

  // if (!isLogin || !document.cookie) {
  //   alert("비정상적인 접근입니다.");
  //   window.location.href = "/";
  //   return 0;
  // }

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
