import styled from "styled-components";

export const PrimaryButton = styled.a`
  transition: all 0.5s ease-out;
  background-color: transparent;
  padding: 15px 40px;
  border-radius: 15px;
  margin-right: 10px;
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
  @media screen and (max-width: 768px) {
    padding: 20px;
  }
`;

export const SecundaryButton = styled.a`
  transition: all 0.5s ease-out;
  background: transparent;
  padding: 30px 80px;
  border-radius: 15px;
  margin-right: 10px;
  font-weight: bold;
  font-size: 2rem;
  color: black;
  border: 1px solid green;
  :hover {
    transition: all 0.5s ease-out;
    background-color: white;
    border-color: lightgreen;
    color: green;
  }
  :disabled {
    opacity: 0.6;
    filter: saturate(60%);
  }
  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  } ;
`;
