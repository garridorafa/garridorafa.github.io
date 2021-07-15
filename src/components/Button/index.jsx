import { PrimaryButton, SecundaryButton } from "./styles";

const Button = ({ children, variant, url }) => {
  if (variant === "primary") {
    return (
      <PrimaryButton href={url} target="_blank">
        {children}
      </PrimaryButton>
    );
  } else {
    return (
      <SecundaryButton href={url} target="_blank">
        {children}
      </SecundaryButton>
    );
  }
};

export default Button;
