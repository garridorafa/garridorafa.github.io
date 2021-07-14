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
  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
    padding: 30px 5px 0 5px;
    img {
      width: 100%;
    }
    p {
      padding: 0;
    }
  } ;
`;

export const ButtonGroup = styled.div`
  margin-top: 70px;
  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    padding: 0;
    margin: 0;
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
  @media screen and (max-width: 768px) {
    h2 {
      padding: 0%;
    }
  }
`;
