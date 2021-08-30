import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';

import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi! <br/>
        Welcome to My Personal Portfolio!
      </SectionTitle>
      <SectionText>
        My name is Hardik Asher and I am a budding Computer Science Engineer. I am currently pursuing my B.Tech. Degree in Computer Science from K. J. Somaiya College of Engineering in Mumbai. This portfolio is a recapitulation of my learnings and accomplishments!
      </SectionText>
    </LeftSection>
  </Section>
);

export default Hero;