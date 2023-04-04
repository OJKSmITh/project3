import { ButtonStyled } from "./styled";


export const Button = ({
  color,
  children,
  textcolor,
  name,
  onClick,
  pianoState,
  modal
}) => {

  const colorChip = {
    color1: "#e9edf1",
    color2: "#a6b8c4",
    color3: "#fff",
  };

  return (

    <ButtonStyled
      name={name}
      color={colorChip[color]}
      textcolor={colorChip[textcolor]}
      onClick={onClick}
      pianoState={pianoState}
      className={modal}
    >

      {children}
    </ButtonStyled>
  );
};
