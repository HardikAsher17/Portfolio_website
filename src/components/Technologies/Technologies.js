import React from 'react';
import { DiFirebase, DiTerminalBadge, DiReact, DiPython, DiBrackets } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <br/> <br/>
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I have worked with a wide range of technologies in the web development world.

    </SectionText>
    <List>
      <ListItem>
        <DiPython size="50px" />
        <ListContainer>
          <ListTitle>Coding Languages</ListTitle>
          <ListParagraph>
            Have worked with <br/>
            Python, Java, C, C++ and Dart
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiReact size="50px" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Have made projects with <br/>
            HTML, CSS, React.js, React Native and Flutter
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="50px" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Done Back-end development with <br/>
            Node Js, MongoDB and Firebase
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiBrackets size="50px" />
        <ListContainer>
          <ListTitle>Other technologies</ListTitle>
          <ListParagraph>
            Completed courses in <br/>
            Blockchain Smart Contracts and Dapps.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiTerminalBadge size="50px" />
        <ListContainer>
          <ListTitle>Related works</ListTitle>
          <ListParagraph>
            Worked on projects involving <br/>
            Artificial Intelligence, Machine Learning as well as UI/UX Desigining.
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider/>
  </Section>
);

export default Technologies;
