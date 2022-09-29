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
          <LinkItem href="tel: +1 (949) 418-2482">+1 (949) 418-2482</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto: hasher1@uci.edu">hasher1@uci.edu</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Address: 3801, Parkview Lane, Apt. 26D, Irvine, CA- 92612.</Slogan>
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
