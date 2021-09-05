import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';
import Button from '../../styles/GlobalComponents/Button';

const data = [
  { str: '10+', text: 'Open Source Projects'},
  { str: 8.8, text: 'Cumulative GPA (till Sem VI)', },
  { str: 323, text: 'GRE Score', },
  { str: 3, text: 'Research Papers in Review', }
];

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
    <Button onClick={() => window.location = 'https://drive.google.com/file/d/1-KLPg4Mz0uuH69rzaJPX_9Q0Kvx5b3zP/view?usp=sharing' }>My Resume</Button>
    <SectionDivider />
  </Section>
);

export default Acomplishments;
