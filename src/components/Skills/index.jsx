import { IconStyled, SkillItemStyled, SkillsDiv, SkillsGroup } from "./styles";
import skillsInfo from "./skillsInfo";

const SkillItem = ({ description, iconName }) => {
  return (
    <SkillItemStyled textAlign="center">
      <IconStyled name={iconName} size="huge" />
      <p>{description}</p>
    </SkillItemStyled>
  );
};

const SkillsSection = () => {
  return (
    <SkillsDiv id="skills">
      <h2>Skills</h2>
      <SkillsGroup>
        {skillsInfo.map((skill, index) => {
          return <SkillItem key={index} {...skill} />;
        })}
      </SkillsGroup>
    </SkillsDiv>
  );
};

export default SkillsSection;
