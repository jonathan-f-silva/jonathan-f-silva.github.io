import {
  Stack, IconButton, Link, Tooltip, useClipboard, useColorModeValue,
} from '@chakra-ui/react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';

function ContactButtons() {
  const { hasCopied, onCopy } = useClipboard('j0n4t@hotmail.com');

  return (
    <Stack
      spacing={ { base: 4, md: 8, lg: 20 } }
      direction={ { base: 'column', md: 'row' } }
      w={ { base: '80%', md: '600px' } }
    >
      <Stack
        align="center"
        justify="space-around"
        direction={ { base: 'row', md: 'column' } }
      >
        <Tooltip
          label={ hasCopied ? 'Email Copiado!' : 'Copiar Email' }
          closeOnClick={ false }
          hasArrow
        >
          <IconButton
            aria-label="email"
            variant="ghost"
            size="lg"
            fontSize="3xl"
            icon={ <MdEmail /> }
            _hover={ {
              bg: 'blue.500',
              color: useColorModeValue('white', 'gray.700'),
            } }
            onClick={ onCopy }
            isRound
          />
        </Tooltip>

        <Link href="https://github.com/jonathan-f-silva">
          <IconButton
            aria-label="github"
            variant="ghost"
            size="lg"
            fontSize="3xl"
            icon={ <BsGithub /> }
            _hover={ {
              bg: 'blue.500',
              color: useColorModeValue('white', 'gray.700'),
            } }
            isRound
          />
        </Link>

        <Link href="https://www.linkedin.com/in/jonathan-f-silva/">
          <IconButton
            aria-label="linkedin"
            variant="ghost"
            size="lg"
            icon={ <BsLinkedin size="28px" /> }
            _hover={ {
              bg: 'blue.500',
              color: useColorModeValue('white', 'gray.700'),
            } }
            isRound
          />
        </Link>
      </Stack>
    </Stack>
  );
}

export default ContactButtons;
