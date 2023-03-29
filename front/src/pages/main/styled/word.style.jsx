import styled from "styled-components";
import { MainButtonComponent } from "../../../common/header/button";
import sing from "../../../common/images/sing.png";

const ContentPosition = styled.div`
  display: flex;
  width: 1980px;
  height: 1080px;
  justify-content: center;
  overflow: hidden;

  .imagebox {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .image-div1 {
    background-image: url(${sing});
    background-repeat: no-repeat;
    background-size: contain;
    width: 400px;
    height: 400px;
    object-fit: cover;
    transform: rotate(-20deg);
    margin-left: auto;
  }

  .image-div2 {
    background-image: url(${sing});
    background-repeat: no-repeat;
    background-size: contain;
    width: 276px;
    height: 350px;
  }

  & > div:first-child {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .firsthang {
    display: flex;
    margin: 0;
    padding: 0;
  }

  .worddiv1 {
    font-family: "PlayfairDisplay-Italic";
    font-size: 120px;
  }
  .worddiv2 {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    font-size: 70px;
  }
  .secondhang {
    font-size: 70px;
  }
  .thirdhang {
    font-size: 70px;
  }
`;

export const Mainword = () => {
  return (
    <ContentPosition>
      <div>
        <div className="firsthang">
          <div className="worddiv1">Gpt Music</div>
          <div className="worddiv2">에서</div>
        </div>
        <div className="secondhang">자신만의 음악을</div>
        <div className="thirdhang">만들고 공유해보세요</div>
        <MainButtonComponent />
      </div>
      <div className="imagebox">
        <div className="image-div1"></div>
        <div className="image-div2"></div>
      </div>
    </ContentPosition>
  );
};
