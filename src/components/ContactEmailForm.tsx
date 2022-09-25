import {
  VStack, Button, FormControl, FormLabel,
  Input, InputGroup, InputLeftElement, Textarea,
  useColorModeValue,
  Text,
} from '@chakra-ui/react';
import { useState } from 'react';
import { BsPerson } from 'react-icons/bs';
import { MdOutlineEmail } from 'react-icons/md';
import sendMessage from '../utils/sendMessage';

function ContactEmailForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sending, setSending] = useState(false);
  const [response, setResponse] = useState<string | null>(null);

  const isValidEmail = email.match(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
  );

  const submitMessage = async () => {
    if (isValidEmail && name && message) {
      setSending(true);
      const HTTP_OK = 200;
      const { status } = await sendMessage({ name, email, message });
      if (status !== HTTP_OK) {
        setResponse(`Deu algo errado ao enviar a mensagem.
      Por favor, tente outra forma de contato.`);
      } else {
        setResponse(`Muito obrigado por sua mensagem, assim que possível
        entrarei em contato!`);
        setName('');
        setEmail('');
        setMessage('');
      }
      setSending(false);
    }
  };

  return (
    <VStack
      bg={ useColorModeValue('white', 'gray.700') }
      borderRadius="lg"
      p={ 8 }
      color={ useColorModeValue('gray.700', 'whiteAlpha.900') }
      shadow="base"
      w={ { base: 'full', md: '600px' } }
      spacing={ 5 }
    >
      {response ? (
        <VStack>
          <Text>{response}</Text>
          <Button onClick={ () => setResponse(null) }>Nova mensagem</Button>
        </VStack>
      ) : (
        <>
          <FormControl isRequired isInvalid={ name === '' }>
            <FormLabel>Nome</FormLabel>
            <InputGroup>
              <InputLeftElement>
                <BsPerson />
              </InputLeftElement>
              <Input
                type="text"
                name="name"
                placeholder="Seu nome"
                value={ name }
                onChange={ (event) => setName(event.target.value) }
              />
            </InputGroup>
          </FormControl>

          <FormControl isRequired isInvalid={ !isValidEmail }>
            <FormLabel>Email</FormLabel>
            <InputGroup>
              <InputLeftElement>
                <MdOutlineEmail />
              </InputLeftElement>
              <Input
                type="email"
                name="email"
                placeholder="Seu email"
                value={ email }
                onChange={ (event) => setEmail(event.target.value) }
              />
            </InputGroup>
          </FormControl>

          <FormControl isRequired isInvalid={ message === '' }>
            <FormLabel>Mensagem</FormLabel>
            <Textarea
              name="message"
              placeholder="Sua mensagem"
              rows={ 6 }
              resize="none"
              value={ message }
              onChange={ (event) => setMessage(event.target.value) }
            />
          </FormControl>

          <Button
            colorScheme="blue"
            bg="blue.400"
            color="white"
            _hover={ {
              bg: 'blue.500',
            } }
            disabled={ sending === true }
            onClick={ submitMessage }
          >
            Enviar mensagem
          </Button>
        </>
      ) }
    </VStack>
  );
}

export default ContactEmailForm;
