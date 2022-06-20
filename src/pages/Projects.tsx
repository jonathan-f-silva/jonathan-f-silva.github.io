import { Heading, VStack } from '@chakra-ui/react';

import Project from '../components/Project';

import projectList from '../utils/projectList.json';

function Projects() {
  return (
    <VStack w="full">
      <Heading fontSize={ { base: '4xl', md: '5xl' } }>
        Projetos
      </Heading>
      {projectList.map(
        (project, index) => (
          <Project key={ project.name } index={ index } { ...project } />
        ),
      )}
    </VStack>
  );
}

export default Projects;
