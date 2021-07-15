import { Logo, NavBarLogo, NavContainer, NavItem, NavMenu } from "./styles";

const NavBar = () => {
  return (
    <NavContainer>
      <NavBarLogo>
        <Logo href="/">Rafa Garrido </Logo>
      </NavBarLogo>
      <NavMenu>
        <li>
          <NavItem href="#top">About</NavItem>
        </li>
        <li>
          <NavItem href="#skills">Skills</NavItem>
        </li>
        <li>
          <NavItem href="#projects">Projects</NavItem>
        </li>
        <li>
          <NavItem href="#contact">Contact</NavItem>
        </li>
      </NavMenu>
    </NavContainer>
  );
};

export default NavBar;
