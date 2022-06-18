import { Heading, VStack } from '@chakra-ui/react';

import Project from '../components/Project';

const projects = [
  {
    name: 'Ebytr ToDo',
    link: 'https://jonathan-f-silva.github.io/project-ebytr-ui',
    // eslint-disable-next-line max-len
    logo: 'https://raw.githubusercontent.com/jonathan-f-silva/project-ebytr-ui/7213d1092ad8fc5ffb4cc8cc553ae0d462dcff2b/src/assets/ebytr.svg',
    descriptions: [
      `Aplicação estilo lista de tarefas feita para o
      Desafio da Blitz de Carreira da Trybe.`,
      `Com esse app é possível:
       Listar e ordenar tarefas pela descrição, data de criação e status,
       criar, editar e remover tarefas e alterar status de uma tarefa`,
    ],
  },
];

function Projects() {
  return (
    <VStack w="full">
      <Heading
        fontSize={ { base: '3xl', md: '5xl' } }
        id="projetos"
      >
        Projetos
      </Heading>
      {projects.map(
        (project) => <Project key={ project.name } { ...project } />,
      )}
    </VStack>
  );
}

export default Projects;
