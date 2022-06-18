import { VStack, Heading } from '@chakra-ui/react';
import ContactButtons from '../components/ContactButtons';
import ContactEmailForm from '../components/ContactEmailForm';

function Contact() {
  return (
    <VStack w="full" spacing={ { base: 4, md: 8, lg: 10 } }>
      <Heading fontSize={ { base: '4xl', md: '5xl' } }>
        Contato
      </Heading>
      <ContactButtons />
      <ContactEmailForm />
    </VStack>
  );
}

export default Contact;
