import styled from "styled-components";

export const ContactDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 73px 0;
  font-size: 1.6rem;
  background: #d1ffd1;
  h2 {
    padding-top: 40px;
    font-size: 3.5rem;
  }
  @media screen and (max-width: 768px) {
    font-size: 2rem;
  } ;
`;
