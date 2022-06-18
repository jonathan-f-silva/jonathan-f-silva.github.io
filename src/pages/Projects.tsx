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
        (project) => <Project key={ project.name } { ...project } />,
      )}
    </VStack>
  );
}

export default Projects;
