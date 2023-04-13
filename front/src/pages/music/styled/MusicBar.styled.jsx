import styled from "styled-components";

export const MusicBarLayout = styled.div`
  width: 100%;
  height: 30rem;
  margin-top: 660px;
  display: flex;
  /* justify-content: ${(left) => (left ? "flex-end" : "flex-start")}; */

  & > div:nth-child(1) > div:nth-child(-n + 8) {
    background-color: black;
  }
  & > div:nth-child(2) > div:nth-child(-n + 6) {
    background-color: black;
  }
  & > div:nth-child(3) > div:nth-child(-n + 10) {
    background-color: black;
  }
  & > div:nth-child(4) > div:nth-child(-n + 4) {
    background-color: black;
  }
  & > div:nth-child(5) > div:nth-child(-n + 3) {
    background-color: black;
  }
  & > div:nth-child(6) > div:nth-child(-n + 7) {
    background-color: black;
  }
  & > div:nth-child(7) > div:nth-child(-n + 11) {
    background-color: black;
  }
  & > div:nth-child(8) > div:nth-child(-n + 2) {
    background-color: black;
  }
  & > div:nth-child(9) > div:nth-child(-n + 0) {
    background-color: black;
  }
  & > div:nth-child(10) > div:nth-child(-n + 6) {
    background-color: black;
  }
  & > div:nth-child(11) > div:nth-child(-n + 9) {
    background-color: black;
  }
  & > div:nth-child(12) > div:nth-child(-n + 2) {
    background-color: black;
  }
  & > div:nth-child(13) > div:nth-child(-n + 7) {
    background-color: black;
  }
`;

export const BarLayout = styled.div`
  width: 38.5px;
  height: 100%;
  display: flex;
  flex-direction: column;

  & > div:nth-child(6) {
    background-color: #01fe39;
  }

  & > div:nth-child(7) {
    background-color: #02e7ac;
  }

  & > div:nth-child(8) {
    background-color: #05d3d2;
  }

  & > div:nth-child(9) {
    background-color: #04bff8;
  }

  & > div:nth-child(10) {
    background-color: #009dfd;
  }

  & > div:nth-child(11) {
    background-color: #1575f3;
  }

  & > div:nth-child(12) {
    background-color: #4e54de;
  }

  & > div:nth-child(13) {
    background-color: #6208d9;
  }

  & > div:nth-child(14) {
    background-color: #8202d9;
  }
`;

export const Bar = styled.div`
  width: 30px;
  height: 20px;
  background: yellow;
  margin: 4px;
  border-radius: 7px;
  display: inline-block;
`;

export const MusicBar = () => {
  return (
    <>
      <MusicBarLayout>
        <BarLayout>
          <Bar />
          <Bar />
          <Bar />
          <Bar />
          <Bar />
          <Bar />
          <Bar />
          <Bar />
          <Bar />
          <Bar />
          <Bar />
          <Bar />
          <Bar />
          <Bar />
        </BarLayout>
        <BarLayout>
          <Bar />
          <Bar />
          <Bar />
          <Bar />
          <Bar />
          <Bar />
          <Bar />
          <Bar />
          <Bar />
          <Bar />
          <Bar />
          <Bar />
          <Bar />
          <Bar />
        </BarLayout>
        <BarLayout>
          <Bar />
          <Bar />
          <Bar />
          <Bar />
          <Bar />
          <Bar />
          <Bar />
          <Bar />
          <Bar />
          <Bar />
          <Bar />
          <Bar />
          <Bar />
          <Bar />
        </BarLayout>
        <BarLayout>
          <Bar />
          <Bar />
          <Bar />
          <Bar />
          <Bar />
          <Bar />
          <Bar />
          <Bar />
          <Bar />
          <Bar />
          <Bar />
          <Bar />
          <Bar />
          <Bar />
        </BarLayout>
        <BarLayout>
          <Bar />
          <Bar />
          <Bar />
          <Bar />
          <Bar />
          <Bar />
          <Bar />
          <Bar />
          <Bar />
          <Bar />
          <Bar />
          <Bar />
          <Bar />
          <Bar />
        </BarLayout>
        <BarLayout>
          <Bar />
          <Bar />
          <Bar />
          <Bar />
          <Bar />
          <Bar />
          <Bar />
          <Bar />
          <Bar />
          <Bar />
          <Bar />
          <Bar />
          <Bar />
          <Bar />
        </BarLayout>
        <BarLayout>
          <Bar />
          <Bar />
          <Bar />
          <Bar />
          <Bar />
          <Bar />
          <Bar />
          <Bar />
          <Bar />
          <Bar />
          <Bar />
          <Bar />
          <Bar />
          <Bar />
        </BarLayout>
        <BarLayout>
          <Bar />
          <Bar />
          <Bar />
          <Bar />
          <Bar />
          <Bar />
          <Bar />
          <Bar />
          <Bar />
          <Bar />
          <Bar />
          <Bar />
          <Bar />
          <Bar />
        </BarLayout>
        <BarLayout>
          <Bar />
          <Bar />
          <Bar />
          <Bar />
          <Bar />
          <Bar />
          <Bar />
          <Bar />
          <Bar />
          <Bar />
          <Bar />
          <Bar />
          <Bar />
          <Bar />
        </BarLayout>
        <BarLayout>
          <Bar />
          <Bar />
          <Bar />
          <Bar />
          <Bar />
          <Bar />
          <Bar />
          <Bar />
          <Bar />
          <Bar />
          <Bar />
          <Bar />
          <Bar />
          <Bar />
        </BarLayout>
        <BarLayout>
          <Bar />
          <Bar />
          <Bar />
          <Bar />
          <Bar />
          <Bar />
          <Bar />
          <Bar />
          <Bar />
          <Bar />
          <Bar />
          <Bar />
          <Bar />
          <Bar />
        </BarLayout>
        <BarLayout>
          <Bar />
          <Bar />
          <Bar />
          <Bar />
          <Bar />
          <Bar />
          <Bar />
          <Bar />
          <Bar />
          <Bar />
          <Bar />
          <Bar />
          <Bar />
          <Bar />
        </BarLayout>
        <BarLayout>
          <Bar />
          <Bar />
          <Bar />
          <Bar />
          <Bar />
          <Bar />
          <Bar />
          <Bar />
          <Bar />
          <Bar />
          <Bar />
          <Bar />
          <Bar />
          <Bar />
        </BarLayout>
      </MusicBarLayout>
    </>
  );
};
