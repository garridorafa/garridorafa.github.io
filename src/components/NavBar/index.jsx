import { NavBarLogo, NavContainer, NavItem, NavMenu } from "./styles";

const NavBar = () => {
  return (
    <NavContainer>
      <NavBarLogo>Rafa Garrido </NavBarLogo>
      <NavMenu>
        <li>
          <NavItem>About</NavItem>
        </li>
        <li>
          <NavItem>Skills</NavItem>
        </li>
      </NavMenu>
    </NavContainer>
  );
};

export default NavBar;
