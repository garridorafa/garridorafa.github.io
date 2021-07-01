import { Icon } from "semantic-ui-react";

import { AvatarImage, DescriptionStyled, HeroDiv } from "./styles";
import avatar from "../../assets/profile-avatar.jpg";

const HeroSection = () => {
  return (
    <HeroDiv>
      <div>
        <AvatarImage src={avatar} alt="Profile" />
      </div>
      <div>
        <h1>Hey, I'm Rafa!</h1>
        <DescriptionStyled>
          A web designer and developer based in Santo Domingo. I like create
          fast and beautiful websites to help people go online.
        </DescriptionStyled>
        <Icon name="linkedin" size="big" />
        <Icon name="github" size="big" />
        <Icon name="npm" size="big" />
        <Icon name="mail" size="big" />
      </div>
    </HeroDiv>
  );
};

export default HeroSection;
