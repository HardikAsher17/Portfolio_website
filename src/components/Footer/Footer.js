import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillFacebook } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, Slogan1, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <CompanyContainer>
          <Slogan1>Connect with Me!</Slogan1>
        </CompanyContainer>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel: +91-8169352927">+91-8169352927</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto: hardik.asher@somaiya.edu">hardik.asher@somaiya.edu</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>
          Address: 302, Giriraj CHS, Factory Lane, Borivali West, Mumbai-400092.</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/HardikAsher17">
            <AiFillGithub size="30px" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/hardik-asher-6b59021a9/">
            <AiFillLinkedin size="30px" />
          </SocialIcons>
          <SocialIcons href="https://www.instagram.com/hardik.asher/">
            <AiFillInstagram size="30px" />
          </SocialIcons>
          <SocialIcons href="https://www.facebook.com/hardik.asher">
            <AiFillFacebook size="30px" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
