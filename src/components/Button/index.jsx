import { ButtonStyled } from "./styles";

const Button = ({ children, variant, url }) => {
  return (
    <ButtonStyled href={url} variant={variant} target="_blank">
      {children}
    </ButtonStyled>
  );
};

export default Button;
