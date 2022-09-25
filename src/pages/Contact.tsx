import { Stack, VStack, Heading } from '@chakra-ui/react';
import ContactButtons from '../components/ContactButtons';
import ContactEmailForm from '../components/ContactEmailForm';

function Contact() {
  return (
    <VStack w="full" spacing={ { base: 4, md: 8, lg: 10 } }>
      <Heading fontSize={ { base: '4xl', md: '5xl' } }>
        Contato
      </Heading>
      <Stack
        justifyContent="center"
        alignItems={ { base: 'center', md: 'normal' } }
        direction={ { base: 'column', md: 'row' } }
        w={ { base: '80%', md: '600px' } }
      >
        <ContactButtons />
        <ContactEmailForm />
      </Stack>
    </VStack>
  );
}

export default Contact;
