import styled from "styled-components";

export const Form = styled.div`
  border-radius: 10px;
  background: #e9edf1;
  /* box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); */
  position: absolute;
  width: 500px;
  height: 800px;
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  box-sizing: border-box;

  &::-webkit-scrollbar {
    display: none;
  }

  & > form:nth-child(1) {
    display: flex;
    flex-direction: column;
    align-items: center;

    & > input {
      display: inline;
    }

  }


  & > form > button {
    padding: 10px 20px;
    margin-bottom: 10px;
  }

  & > form {
    margin-top: 10px;
    text-align: center;
  }

  & > form > input {

    margin: 15px auto;
    display: block;
    width: 70%;
  }

  & > form > input:nth-child(8) {
    height: 100px;
  }

  & > form > button {
    padding: 10px 20px;
  }
`;
