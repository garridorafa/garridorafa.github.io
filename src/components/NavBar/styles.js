import styled from "styled-components";

export const NavMenu = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-gap: 10px;
  list-style: none;
  margin-right: 2rem;
  li {
    height: 90px;
  }
`;

export const NavItem = styled.a`
  transition: all 0.3s ease-in;
  color: #827171f2;
  font-weight: bold;
  font-size: 1.6rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;
  :hover {
    color: black;
    transition: all 0.3s;
  }
`;

export const NavBarLogo = styled.div`
  display: flex;
  width: 100%;
  @media screen and (max-width: 768px) {
    padding-top: 40px;
    justify-content: center;
  } ;
`;

export const Logo = styled(NavItem)`
  font-size: 2rem;
  color: black;
`;

export const NavContainer = styled.nav`
  background: lightgreen;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90px;
  padding: 0 50px;
  border-bottom: 1px solid black;
  top: 0;
  left: 0;
  right: 0;
  @media screen and (max-width: 768px) {
    position: static;
    flex-direction: column;
    height: 160px;
  } ;
`;
