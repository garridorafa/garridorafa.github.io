import Button from "../Button";
import { ContactDiv } from "./styled";

const Contact = () => {
  return (
    <ContactDiv id="contact">
      <h2>Want to make something cool?</h2>
      <p>Let's work together 😀</p>
      <Button variant="secundary" url="mailto:garridolara.rafa@gmail.com">
        GET IN TOUCH
      </Button>
    </ContactDiv>
  );
};

export default Contact;
