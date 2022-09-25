import { Link, Stack, Text, useColorModeValue } from '@chakra-ui/react';

function Footer() {
  return (
    <Stack
      bg={ useColorModeValue('gray.50', 'gray.900') }
      color={ useColorModeValue('gray.700', 'gray.200') }
      p={ 4 }
      direction={ { base: 'column', md: 'row' } }
      spacing={ 4 }
      justify={ { base: 'center', md: 'space-between' } }
      align={ { base: 'center', md: 'center' } }
      w="full"
    >
      <Text>
        Baseado em&nbsp;
        <Link href="https://chakra-templates.dev">Chakra Templates</Link>
      </Text>
      <Text>
        Feito com 💜 por Jonathan
      </Text>
    </Stack>
  );
}
export default Footer;
