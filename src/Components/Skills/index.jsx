import { IconStyled, ItemStyled, SkillsDiv, SkillsGroup } from "./styles";
import skillsInfo from "./skillsInfo";

const SkillItem = ({ description, iconName }) => {
  return (
    <ItemStyled textAlign="center">
      <IconStyled name={iconName} size="huge" />
      <p>{description}</p>
    </ItemStyled>
  );
};

const SkillsSection = () => {
  return (
    <SkillsDiv>
      <h2>Skills</h2>
      <SkillsGroup>
        {skillsInfo.map((skill) => {
          return <SkillItem {...skill} />;
        })}
      </SkillsGroup>
    </SkillsDiv>
  );
};

export default SkillsSection;
