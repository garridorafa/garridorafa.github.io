import { Icon } from "semantic-ui-react";
import styled from "styled-components";

export const IconStyled = styled(Icon)({
  fontSize: "7rem !important",
});

export const SkillItemStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 33%;
  align-items: center;
  padding: 20px 0;
  p {
    max-width: 70%;
    font-size: 20px;
    text-align: center;
  }
  @media screen and (max-width: 768px) {
    width: 90%;
  } ;
`;

export const SkillsDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 800px;
  background: #d1ffd1;
  h2 {
    padding-top: 60px;
    font-size: 3.5rem;
    margin-bottom: 14px;
  }
  @media screen and (max-width: 768px) {
    height: auto;
  } ;
`;

export const SkillsGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 70%;
  align-items: center;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    width: 90%;
  } ;
`;
