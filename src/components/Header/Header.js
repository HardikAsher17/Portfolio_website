import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: "flex", alignItems: "center", color: 'white'}}>
          <DiCssdeck size="30px" /> <Span>Portfolio</Span>
        </a>
      </Link>
    </Div1>
    <Div3>
      <SocialIcons href="https://github.com/HardikAsher17">
        <AiFillGithub size="30px" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/hardik-asher-6b59021a9/">
        <AiFillLinkedin size="30px" />
      </SocialIcons>
      <SocialIcons href="https://www.instagram.com/hardik.asher/">
        <AiFillInstagram size="30px" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
