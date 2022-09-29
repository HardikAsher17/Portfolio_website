import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';
import Button from '../../styles/GlobalComponents/Button';

const data = [
  { str: '10+', text: 'Open Source Projects'},
  { str: 3.7, text: 'Cumulative GPA', },
  { str: 323, text: 'GRE Score', },
  { str: 2, text: 'Research Papers Published', }
];

const openInNewTab = url => {
  window.open(url, '_blank', 'noopener,noreferrer');
};

const Acomplishments = () => (
  <Section>
    <SectionTitle>Recent Endeavours</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>
            {card.str}
          </BoxNum>
          <BoxText>
            {card.text}
          </BoxText>
        </Box>
      ))}
    </Boxes>
    <br/>
    <Button onClick={() => openInNewTab('https://drive.google.com/file/d/1PUxH_4lrsDiVbRQZbmPiHvzdalkPjEue/view?usp=sharing') }>My Resume</Button>
    <SectionDivider />
  </Section>
);

export default Acomplishments;
