import { ButtonStyled } from "./styled";

export const Button = ({ color, children, textcolor, name, modal, onClick }) => {
  const colorChip = {
    color1: "#e9edf1",
    color2: "#a6b8c4",
    color3: "#fff",
  };

  return (
    <ButtonStyled className={modal} name={name} color={colorChip[color]} onClick={onClick} textcolor={colorChip[textcolor]}>
      {children}
    </ButtonStyled>
  );
};
