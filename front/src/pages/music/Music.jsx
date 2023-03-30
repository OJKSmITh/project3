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

export const Music = () => {
  return (
    <>
      <Wrap>
        <MusicBar />
        <Musicform>
          <GPT></GPT>
          <PianoForm>
            <PianoMenu></PianoMenu>
            <Piano></Piano>
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
