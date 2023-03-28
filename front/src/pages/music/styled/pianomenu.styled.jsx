import styled from "styled-components";

export const Pianotop = styled.div`
  width: 100%;
  height: 149px;
  background: #a6b8c4;
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 50px;
  padding-right: 50px;
  box-sizing: border-box;

  & > div:nth-child(1) {
    width: 50px;
    height: 30px;
    border: 3px solid black;
    border-radius: 10px;
    background: red;
  }

  & > div:nth-child(2) {
    width: 50px;
    height: 30px;
    border: 3px solid black;
    border-radius: 10px;
    background: red;
  }

  & > div:nth-child(3) {
    width: 300px;
    height: 100px;
    border: 3px solid black;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & > div:nth-child(4) {
    width: 50px;
    height: 30px;
    border: 3px solid black;
    border-radius: 10px;
    background: red;
  }

  & > div:nth-child(5) {
    width: 50px;
    height: 30px;
    border: 3px solid black;
    border-radius: 10px;
    background: red;
  }

  & > div:nth-child(3) > div {
    width: 250px;
    height: 50px;
    border: 3px solid black;
    border-radius: 10px;
    background: skyblue;
  }
`;

export const PianoMenu = () => {
  return (
    <>
      <Pianotop>
        <div></div>
        <div></div>
        <div>
          <div></div>
        </div>
        <div></div>
        <div></div>
      </Pianotop>
    </>
  );
};
