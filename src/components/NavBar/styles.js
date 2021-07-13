import { Link } from "react-router-dom";
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

export const NavItem = styled(Link)`
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

export const NavBarLogo = styled(NavItem)`
  flex: 1;
  justify-self: start;
  font-size: 2rem;
  color: black;
`;

export const NavContainer = styled.nav`
  background: lightgreen;
  position: fixed;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 90px;
  padding: 0 50px;
  border-bottom: 1px solid black;

  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`;
