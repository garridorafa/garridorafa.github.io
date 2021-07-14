import Button from "../Button";
import { ProjectInfo } from "./projectsInfo";
import { ProjectItemStyled, ProjectsDiv } from "./styles";

export const ProjectItem = ({
  projectName,
  description,
  image,
  alt,
  repo,
  url,
}) => {
  return (
    <ProjectItemStyled>
      <div>
        <h3>{projectName}</h3>
        <p>{description}</p>
        {repo && <Button variant="primary">GitHub Repo</Button>}
        {url && <Button variant="primary">Check Online!</Button>}
      </div>
      <img src={image} alt={alt} />
    </ProjectItemStyled>
  );
};

const Projects = () => {
  return (
    <ProjectsDiv id="projects">
      <h2>Projects</h2>
      {ProjectInfo.map((project) => {
        return <ProjectItem {...project} />;
      })}
    </ProjectsDiv>
  );
};

export default Projects;
