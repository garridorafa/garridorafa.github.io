import { Grid, Icon } from "semantic-ui-react";

import { ItemSyled, SkillsSegment } from "./styles";
import skillsInfo from "./skillsInfo";

const SkillItem = ({ description, iconName }) => {
  return (
    <ItemSyled textAlign="center">
      <Icon name={iconName} size="massive" />
      <p>{description}</p>
    </ItemSyled>
  );
};

const SkillsSection = () => {
  return (
    <SkillsSegment>
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
    </SkillsSegment>
  );
};

export default SkillsSection;
