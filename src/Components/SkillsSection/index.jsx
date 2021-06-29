import { Grid, Icon } from "semantic-ui-react";

import skillsInfo from "./skillsInfo";

export const SkillItem = ({ title, description, iconName }) => {
  return (
    <Grid.Column textAlign="center">
      <Icon name={iconName} size="massive" />
      <p>{description}</p>
    </Grid.Column>
  );
};

const SkillsSection = () => {
  return (
    <>
      <Grid>
        <Grid centered>
          <Grid.Row>
            <h2>Skills</h2>
          </Grid.Row>
          <Grid.Row columns={3}>
            {skillsInfo.map((skill) => {
              return <SkillItem {...skill} />;
            })}
          </Grid.Row>
        </Grid>
      </Grid>
    </>
  );
};

export default SkillsSection;
