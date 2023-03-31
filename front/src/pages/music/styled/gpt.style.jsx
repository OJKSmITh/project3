import styled from "styled-components";
import GPTicon from "../../../common/images/GPTicon.png";

export const GptLaylout = styled.div`
  width: 900px;
  height: 200px;
  background: #a6b8c4;
  display: flex;
  align-items: center;
  border-radius: 15px;
  margin: 0 auto;

  & > div {
    background: #fff;
    width: 100%;
    height: 100px;
    border: 2px solid rgba(0, 0, 0, 0.1);
    padding: 10px 10px 10px 10px;
    box-sizing: border-box;
    display: flex;
  }

  & > div > .gptlogo {
    background-image: url(${GPTicon});
    background-position: center;
    background-size: cover;
    width: 40px;
    height: 40px;
    box-sizing: border-box;
  }
`;

export const GptText = styled.div`
  border: 2px solid #ececec;
  width: 100%;
  height: 100%;
  margin-left: 10px;
  box-sizing: border-box;
`;

export const GPT = (pianoState) => {
  console.log("GPT ::::::::::::", pianoState);

  return (
    <>
      <GptLaylout>
        <div>
          <div className="gptlogo"></div>
          <GptText></GptText>
        </div>
      </GptLaylout>
    </>
  );
};
