import { Icon } from "semantic-ui-react";

import {
  AvatarImage,
  DescriptionStyled,
  HeroDiv,
  Info,
  SocialLink,
} from "./styles";
import avatar from "../../assets/profile-avatar.jpg";

const HeroSection = () => {
  return (
    <HeroDiv id="about">
      <div>
        <AvatarImage src={avatar} alt="Profile" />
      </div>
      <Info>
        <h1>Hey, I'm Rafa!</h1>
        <DescriptionStyled>
          A web designer and developer based in Santo Domingo. I like to create
          fast and beautiful websites to help people go online.
        </DescriptionStyled>
        <div>
          <SocialLink
            href="https://www.linkedin.com/in/rafael-garrido-b8b0b4126/"
            target="_blank"
          >
            <Icon name="linkedin" size="big" />
          </SocialLink>
          <SocialLink href="https://github.com/garridorafa" target="_blank">
            <Icon name="github" size="big" />
          </SocialLink>
          <SocialLink href="https://www.npmjs.com/~garridorafa" target="_blank">
            <Icon name="npm" size="big" />
          </SocialLink>
          <SocialLink href="mailto:garridolara.rafa@gmail.com" target="_blank">
            <Icon name="mail" size="big" />
          </SocialLink>
        </div>
      </Info>
    </HeroDiv>
  );
};

export default HeroSection;
