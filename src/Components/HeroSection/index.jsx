import { Container, Grid, Icon } from "semantic-ui-react";

import { AvatarImage, HeroSegment } from "./styles";
import avatar from "../../assets/profile-avatar.jpg";

const HeroSection = () => {
  return (
    <HeroSegment>
      <Grid>
        <Grid.Row centered>
          <Grid.Column width={4}>
            <AvatarImage src={avatar} alt="Profile" />
          </Grid.Column>
          <Grid.Column width={8}>
            <Container text>
              <h1>Hey, I'm Rafa!</h1>
              <h2>
                A web designer and developer based in Santo Domingo. I like
                create fast and beautiful websites to help people go online.
              </h2>
              <Icon name="linkedin" size="big" />
              <Icon name="github" size="big" />
              <Icon name="npm" size="big" />
              <Icon name="mail" size="big" />
            </Container>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </HeroSegment>
  );
};

export default HeroSection;
