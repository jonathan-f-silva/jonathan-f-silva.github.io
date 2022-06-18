import {
  VStack, Button, FormControl, FormLabel,
  Input, InputGroup, InputLeftElement, Textarea,
  useColorModeValue,
} from '@chakra-ui/react';
import { BsPerson } from 'react-icons/bs';
import { MdOutlineEmail } from 'react-icons/md';

function ContactEmailForm() {
  return (
    <VStack
      bg={ useColorModeValue('white', 'gray.700') }
      borderRadius="lg"
      p={ 8 }
      color={ useColorModeValue('gray.700', 'whiteAlpha.900') }
      shadow="base"
      w="full"
      spacing={ 5 }
    >
      <FormControl isRequired>
        <FormLabel>Nome</FormLabel>

        <InputGroup>
          <InputLeftElement>
            <BsPerson />
          </InputLeftElement>
          <Input type="text" name="name" placeholder="Seu nome" />
        </InputGroup>
      </FormControl>

      <FormControl isRequired>
        <FormLabel>Email</FormLabel>

        <InputGroup>
          <InputLeftElement>
            <MdOutlineEmail />
          </InputLeftElement>
          <Input
            type="email"
            name="email"
            placeholder="Seu email"
          />
        </InputGroup>
      </FormControl>

      <FormControl isRequired>
        <FormLabel>Mensagem</FormLabel>

        <Textarea
          name="message"
          placeholder="Sua mensagem"
          rows={ 6 }
          resize="none"
        />
      </FormControl>

      <Button
        colorScheme="blue"
        bg="blue.400"
        color="white"
        _hover={ {
          bg: 'blue.500',
        } }
      >
        Enviar mensagem
      </Button>
    </VStack>
  );
}

export default ContactEmailForm;
