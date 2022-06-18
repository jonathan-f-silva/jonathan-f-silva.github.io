import {
  Button, Flex, Heading, Image, Link, Stack, Text,
} from '@chakra-ui/react';

import profilePic from '../assets/images/profile.jpg';

function Hero() {
  return (
    <Stack minH="10vh" direction={ { base: 'column', md: 'row' } }>
      {/* <Flex mx="5" justifyContent="center"> */}
      <Image
        rounded="full"
        w={ { base: '50%', xl: '30%' } }
        maxW="350px"
        margin="0 auto"
        alt="Foto do perfil de Jonathan sorrindo"
        objectFit="cover"
        src={ profilePic }
      />
      {/* </Flex> */}
      <Flex p={ 8 } align="center" justify="center">
        <Stack spacing={ 6 } w="full" maxW="lg">
          <Heading fontSize={ { base: '3xl', md: '5xl' } }>
            <Text as="span">Olá, sou o </Text>
            <Text fontStyle="italic" as="span">
              Jonathan
            </Text>
            <Text as="span">!&nbsp;👋</Text>
          </Heading>
          <Text fontSize={ { base: 'md', lg: 'lg' } } color="gray.500">
            Sou Summer Jobber em Currículo na Trybe e estudo Desenvolvimento Web
            e Testes em Software. Muito prazer!
          </Text>
          <Stack
            justify="center"
            direction={ { base: 'column', md: 'row' } }
            spacing={ 4 }
          >
            <Button
              href="#projetos"
              as={ Link }
              rounded="full"
              bg="blue.400"
              color="white"
              _hover={ {
                bg: 'blue.500',
              } }
            >
              Projetos
            </Button>
            <Button rounded="full">Contato</Button>
          </Stack>
        </Stack>
      </Flex>
    </Stack>
  );
}

export default Hero;
