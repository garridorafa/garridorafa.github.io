import styled from "styled-components";

export const FooterDiv = styled.div`
  background: black;
  color: white;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  padding-bottom: 10px;
  height: 100px;
  font-size: 18px;
`;

const Footer = () => {
  return (
    <FooterDiv>
      <p>Copyright © 2021 Rafa Garrido</p>
    </FooterDiv>
  );
};

export default Footer;
