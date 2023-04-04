import styled from "styled-components";
import { InputStyled } from "./styled";

export const Input = ({ placeholder, name, type, id, onChange }) => {
  const placeholderChip = {
    text1: "Email",
    text2: "Password",
    text3: "Nickname",
    text4: "Phone",
    text5: "소개글",
  };

  return (
    <InputStyled
      placeholder={placeholderChip[placeholder]}
      name={name}
      type={type}
      id={id}
      onChange={onChange}
    />
  );
};
