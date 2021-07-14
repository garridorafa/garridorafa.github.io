import styled from "styled-components";

export const AvatarImage = styled.img`
  border-radius: 50%;
  object-fit: cover;
  height: 370px;
  @media screen and (max-width: 768px) {
    height: 250px;
  }
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
  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 0;
    text-align: center;
    height: 500px;
    margin-bottom: 40px;
    h1 {
      font-size: 2.5rem;
    }
  }
`;

export const DescriptionStyled = styled.h2`
  width: 546px;
  @media screen and (max-width: 768px) {
    width: 80%;
    font-size: 1.6rem;
  }
`;

export const Info = styled.div`
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
