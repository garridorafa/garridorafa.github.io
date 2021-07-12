import { ButtonStyled } from "./styles";

const Button = ({ children, variant }) => {
  return <ButtonStyled variant={variant}>{children}</ButtonStyled>;
};

export default Button;
