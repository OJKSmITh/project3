import styled from "styled-components";

export const Pianotop = styled.div`
  width: 100%;
  height: 149px;

  border-radius: 20px;
  /* padding-left: 50px;
  padding-right: 50px; */
  box-sizing: border-box;

  & > div:nth-child(2) {
    width: 100%;
    height: 40px;
    display: flex;
    & > div:nth-child(1) {
      width: 70px;
    }
    & > div:nth-child(2) {
      width: 40px;
      height: 100%;
      background: linear-gradient(0deg, #0089e0 0%, rgba(4, 137, 221, 0) 100%);
    }
    & > div:nth-child(3) {
      width: 350px;
    }
    & > div:nth-child(4) {
      width: 40px;
      height: 100%;
      background: linear-gradient(0deg, #0089e0 0%, rgba(4, 137, 221, 0) 100%);
    }
    & > div:nth-child(5) {
      width: 500px;
    }
    & > div:nth-child(6) {
      width: 40px;
      height: 100%;
      background: linear-gradient(0deg, #0089e0 0%, rgba(4, 137, 221, 0) 100%);
    }
  }
  & > div:nth-child(3) {
    width: 100%;
    height: 50px;
    display: flex;
    & > div:nth-child(1) {
      width: 200px;
      height: 100%;
    }
    & > div:nth-child(2) {
      width: 40px;
      height: 100%;
      background: linear-gradient(0deg, #0089e0 0%, rgba(4, 137, 221, 0) 100%);
    }
    & > div:nth-child(3) {
      width: 400px;
      height: 100%;
    }
    & > div:nth-child(4) {
      width: 40px;
      height: 100%;
      background: linear-gradient(0deg, #0089e0 0%, rgba(4, 137, 221, 0) 100%);
    }
    & > div:nth-child(5) {
      width: 150px;
    }
    & > div:nth-child(6) {
      width: 40px;
      height: 100%;
      background: linear-gradient(0deg, #0089e0 0%, rgba(4, 137, 221, 0) 100%);
    }
  }
  & > div:nth-child(4) {
    width: 100%;
    height: 50px;

    display: flex;
    & > div:nth-child(1) {
      width: 100px;
      height: 100%;
    }
    & > div:nth-child(2) {
      width: 40px;
      height: 100%;
      background: linear-gradient(0deg, #0089e0 0%, rgba(4, 137, 221, 0) 100%);
    }
    & > div:nth-child(3) {
      width: 400px;
      height: 100%;
    }
    & > div:nth-child(4) {
      width: 40px;
      height: 100%;
      background: linear-gradient(0deg, #0089e0 0%, rgba(4, 137, 221, 0) 100%);
    }
    & > div:nth-child(5) {
      width: 150px;
      height: 100%;
    }
    & > div:nth-child(6) {
      width: 40px;
      height: 100%;
      background: linear-gradient(0deg, #0089e0 0%, rgba(4, 137, 221, 0) 100%);
    }
  }
  & > div:nth-child(5) {
    width: 100%;
    height: 10px;
    background: linear-gradient(0deg, #0089e0 0%, #0489dd 100%);
    border-radius: 3px;
  }
`;

export const PianoMenu = () => {
  return (
    <>
      <Pianotop>
        <div></div>
        <div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div></div>
      </Pianotop>
    </>
  );
};
