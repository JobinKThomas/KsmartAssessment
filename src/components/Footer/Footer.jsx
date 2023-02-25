import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <StyledFooter>
      <h4>2023 Company</h4>
      <FooterButtons>
        <Link>About</Link>
        <Link>Terms of Use</Link>
        <Link>Contact</Link>
      </FooterButtons>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #778;
  color: #fff;
  padding: 10px 20px;
  @media only screen and (max-width: 767px) {
    display: block;
    text-align: center;
  }
`;

const Link = styled.a`
  padding: 8px;
  background: none;
  border: none;
  color: #fff;
  border-radius: 20px;
`;

const FooterButtons = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
  @media only screen and (max-width: 767px) {
    display: block;
    text-align: center;
    margin-right: 0;
  }
`;
