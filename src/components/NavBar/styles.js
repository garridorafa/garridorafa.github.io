import styled from "styled-components";

export const NavMenu = styled.ul`
  color: white;
  list-style: none;
  display: flex;
`;

export const NavItem = styled.a`
  text-decoration: none;
  font-size: 1.5rem;
  padding-right: 50px;
  color: black;
  cursor: pointer;
  :hover {
    color: black;
  }
`;

export const NavBarLogo = styled(NavItem)`
  flex: 1;
  justify-self: start;
  font-size: 2rem;
`;

export const NavContainer = styled.nav`
  background: lightgreen;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 60px;
  padding: 0 50px;
`;
