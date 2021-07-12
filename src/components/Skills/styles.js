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
`;

export const SkillsDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 800px;
  background: #d1ffd1;
  h2 {
    font-size: 3.5rem;
    margin-bottom: 14px;
  }
`;

export const SkillsGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 70%;
  align-items: center;
`;
