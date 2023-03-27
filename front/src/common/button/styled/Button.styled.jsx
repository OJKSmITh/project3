import styled from "styled-components";

export const ButtonStyled = styled.button`
  border-radius: 20px;
  border: none;
  outline: none;
  font-size: 12px;
  font-weight: bold;
  padding: 15px 45px;
  margin: 14px;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
  transition: transform 80ms ease-in;
  background: ${(props) => props.color};
  color: ${(props) => props.textcolor};

  & {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  &:active {
    box-shadow: inset 0px 0px 8px rgba(0, 0, 0, 0.25),
      inset -5px -5px 10px #a6b8c4;
  }
`;
