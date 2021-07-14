import styled from "styled-components";

export const ButtonStyled = styled.a`
  transition: all 0.5s ease-out;
  background-color: transparent;
  padding: 15px 40px;
  border-radius: 15px;
  margin-right: 10px;
  margin-top: 70px;
  font-weight: bold;
  font-size: 1.2rem;
  color: black;
  border: 1px solid green;
  :hover {
    transition: all 0.5s ease-out;
    background-color: lightgreen;
    border-color: lightgreen;
    color: white;
  }
  :disabled {
    opacity: 0.6;
    filter: saturate(60%);
  }
`;
