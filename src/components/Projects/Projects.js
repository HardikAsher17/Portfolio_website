import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

// const projectsDemo= [{
//   title: 'Project 1',
//   description: 'This is a description'
// }, {
//   title: 'Project 2',
//   description: 'This is a description'
// }, {
//   title: 'Project 3',
//   description: 'This is a description'
// }, {
//   title: 'Project 4',
//   description: 'This is a description'
// }];

const Projects = () => (
  <Section nopadding id="projects">
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.map(({ id, image, title, description, tags, source, visit}) => (
        <BlogCard key={id}>
          <Img src={image} />
          <TitleContent>
            <HeaderThree title>{title}</HeaderThree>
            <Hr />
          </TitleContent>
          <CardInfo>
            {description}
          </CardInfo>
          <div>
            <br/>
            <TitleContent>Technologies</TitleContent>
            <TagList>
              {tags.map((tag, i) => (
                <Tag key={i}>{tag}</Tag>
              ))}
            </TagList>
          </div>
          <UtilityList>
            <ExternalLinks href={visit}>Code</ExternalLinks>
            <ExternalLinks href={source}>Demo</ExternalLinks>
          </UtilityList>
        </BlogCard>
      )) }
    </GridContainer>
    <SectionDivider/>
  </Section>
);

export default Projects;