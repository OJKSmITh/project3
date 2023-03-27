import styled from 'styled-components'
import { MainButtonComponent } from '../../../common/mainheader/button/button'
import sing from "../../../common/images/sing.png"
const ContentPosition = styled.div`
  display:flex;
  width: 1980px;
  height: 1080px;
  justify-content: center;
  overflow:hidden;

  
  .imagebox {
      display:flex;
      justify-content: center;
      align-items: center;
    }
    
    .image-div1 {
        background-image: url(${sing});
        background-repeat: no-repeat;
        background-size: contain;
        width: 250px;
        height: 200px;
        object-fit:cover;
        transform: rotate(-20deg);
        margin-left: auto;
    }
    
    .image-div2 {
        background-image: url(${sing});
        background-repeat: no-repeat;
        background-size: contain;
        width: 276px;
        height: 200px;
    }
    
    & > div:first-child{
        display:flex;
        flex-direction:column;
        justify-content:center;
        
    }

    .firsthang {
        display:flex;
        margin:0;
        padding:0;
    }
    
    .worddiv1 {
        font-family:"PlayfairDisplay-Italic";
        font-size:45px;
  }
    .worddiv2{
        font-size: 30px;
        display:inline-block;
        margin-bottom: 0;
    
  }
`;

export const Mainword = () => {
  return (
    <ContentPosition>
    <div>
        <div className='firsthang'>
            <div className='worddiv1'>Gpt Music</div>
            <div className='worddiv2'>에서</div>
        </div>
        <div>자신만의 음악을</div>
        <div>만들고 공유해보세요</div>
        <MainButtonComponent/>
    </div>
    <div className='imagebox'>
        <div className="image-div1"></div>
        <div className="image-div2"></div>
    </div>
    </ContentPosition>
  );
};