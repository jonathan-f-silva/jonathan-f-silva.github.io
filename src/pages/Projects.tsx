import { Heading, VStack } from '@chakra-ui/react';

function Projects() {
  return (
    <VStack maxW={ { base: 'full', lg: 'container.xl' } }>
      <Heading id="projetos">Projetos</Heading>
      <iframe
        width="667px"
        height="375px"
        src="https://project-eby001-prod-j0n4t-6lcuxg.mo1.mogenius.io"
        title="Ebytr"
      />
    </VStack>
  );
}

export default Projects;
