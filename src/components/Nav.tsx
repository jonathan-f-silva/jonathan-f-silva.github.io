import {
  Box,
  Flex,
  Button,
  useColorModeValue,
  Stack,
  useColorMode,
  Link,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

// CSS reference from https://github.com/hauptrolle/chakra-templates
export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box
      bg={ useColorModeValue('gray.100', 'gray.900') }
      px={ 4 }
      as="header"
      pos="fixed"
      top="0"
      w="full"
      minH="60px"
      boxShadow="sm"
      zIndex="999"
      css={ {
        backdropFilter: 'saturate(180%) blur(5px)',
        backgroundColor: useColorModeValue(
          'rgba(255, 255, 255, 0.8)',
          'rgba(26, 32, 44, 0.8)',
        ),
      } }
    >
      <Flex h={ 16 } alignItems="center" justifyContent="space-between">
        <Stack direction="row" spacing="7">
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <Link href="#">Início</Link>
          <Link href="#projetos">Projetos</Link>
          <Link href="#contato">Contato</Link>
        </Stack>
        <Flex alignItems="center">
          <Stack direction="row" spacing={ 7 }>
            <Button onClick={ toggleColorMode }>
              {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            </Button>
          </Stack>
        </Flex>
      </Flex>
    </Box>
  );
}
