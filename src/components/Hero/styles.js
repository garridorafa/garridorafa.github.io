import styled from "styled-components";

export const AvatarImage = styled.img`
  border-radius: 50%;
  object-fit: cover;
  height: 370px;
`;

export const SocialLink = styled.a`
  padding-right: 15px;
  color: black;
  :hover {
    color: green;
  }
`;

export const HeroDiv = styled.div`
  display: flex;
  align-items: center;
  margin-top: 90px;
  padding: 127px 123px;
  justify-content: space-evenly;
  height: 700px;
  h1 {
    font-size: 3rem;
  }
`;

export const DescriptionStyled = styled.h2`
  width: 546px;
`;
