import { ProjectInfo } from "./projectsInfo";
import { ProjectItemStyled, ProjectsDiv } from "./styles";

export const ProjectItem = ({ projectName, description, image, alt }) => {
  return (
    <ProjectItemStyled>
      <div>
        <h3>{projectName}</h3>
        <p>{description}</p>
      </div>
      <img src={image} alt={alt} />
    </ProjectItemStyled>
  );
};

const Projects = () => {
  return (
    <ProjectsDiv>
      <h2>Projects</h2>
      {ProjectInfo.map((project) => {
        return <ProjectItem {...project} />;
      })}
    </ProjectsDiv>
  );
};

export default Projects;
