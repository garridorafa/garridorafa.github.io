import Button from "../Button";
import { ProjectInfo } from "./projectsInfo";
import { ButtonGroup, ProjectItemStyled, ProjectsDiv } from "./styles";

export const ProjectItem = ({
  projectName,
  description,
  image,
  alt,
  repo,
  demo,
}) => {
  return (
    <ProjectItemStyled>
      <div>
        <h3>{projectName}</h3>
        <p>{description}</p>
        <ButtonGroup>
          {repo && (
            <Button url={repo} variant="primary">
              GitHub Repo
            </Button>
          )}
          {demo && (
            <Button url={demo} variant="primary">
              Check Online!
            </Button>
          )}
        </ButtonGroup>
      </div>
      <img src={image} alt={alt} />
    </ProjectItemStyled>
  );
};

const Projects = () => {
  return (
    <ProjectsDiv id="projects">
      <h2>Projects</h2>
      {ProjectInfo.map((project, index) => {
        return <ProjectItem key={index} {...project} />;
      })}
    </ProjectsDiv>
  );
};

export default Projects;
