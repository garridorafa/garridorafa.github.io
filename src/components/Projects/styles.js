import styled from "styled-components";

export const ProjectItemStyled = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 130px;
  align-content: center;
  max-width: 1098px;
  h3 {
    font-size: 2.5rem;
  }
  p {
    font-size: 2rem;
    max-width: 520px;
    padding: 0 30px 20px 0;
  }
  img {
    width: 500px;
  }
`;

export const ProjectsDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 73px 0;
  h2 {
    padding-top: 60px;
    font-size: 3.5rem;
  }
`;