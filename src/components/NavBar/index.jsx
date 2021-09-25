import { Logo, NavBarLogo, NavContainer, NavItem, NavMenu } from "./styles";
import { animateScroll as scroll } from "react-scroll";

const NavBar = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <NavContainer>
      <NavBarLogo>
        <Logo spy={true} smooth={true} offset={-70} onClick={scrollToTop}>
          Rafa Garrido
        </Logo>
      </NavBarLogo>
      <NavMenu>
        <li>
          <NavItem spy={true} smooth={true} offset={-70} onClick={scrollToTop}>
            About
          </NavItem>
        </li>
        <li>
          <NavItem spy={true} smooth={true} offset={-70} to="skills">
            Skills
          </NavItem>
        </li>
        <li>
          <NavItem spy={true} smooth={true} offset={-70} to="projects">
            Projects
          </NavItem>
        </li>
        <li>
          <NavItem spy={true} smooth={true} offset={-70} to="contact">
            Contact
          </NavItem>
        </li>
      </NavMenu>
    </NavContainer>
  );
};

export default NavBar;
