import {
  Stack, HStack, VStack, Center, Flex,
  useRadioGroup, useColorModeValue,
  Heading, Text, Image,
} from '@chakra-ui/react';
import { useState } from 'react';
import { MdDesktopMac, MdOutlineSmartphone, MdTabletMac } from 'react-icons/md';
import RadioCard from './RadioCard';

type ProjectProps = {
  name: string,
  link: string,
  logo: string,
  descriptions: string[],
}

function Project({ name, link, logo, descriptions }: ProjectProps) {
  const options = [
    {
      label: 'smart phone',
      width: '380px',
      icon: <MdOutlineSmartphone />,
    },
    {
      label: 'Tablet',
      width: '600px',
      icon: <MdTabletMac />,
    },
    {
      label: 'PC',
      width: 'full',
      icon: <MdDesktopMac />,
    },
  ];
  const [viewWidth, setViewWidth] = useState('full');
  const { getRadioProps } = useRadioGroup({
    name: 'displaySize',
    defaultValue: options[2].width,
    onChange: setViewWidth,
  });

  return (
    <VStack w="full" p={ { base: '2', md: '5' } }>
      <Stack
        direction={ { base: 'column', md: 'row' } }
        w="full"
        h="full"
        alignItems="center"
        justifyContent="space-evenly"
        spacing="5"
      >
        <VStack maxW="350px">
          <Image
            alt={ `Logo do projeto ${name}` }
            // eslint-disable-next-line max-len
            src={ logo }
          />
          <Heading>{ name }</Heading>
          <HStack display={ { base: 'none', lg: 'flex' } }>
            {options.map((value) => {
              const label = value.width;
              const radio = getRadioProps({ value: label });
              return (
                <RadioCard key={ value.label } { ...radio }>
                  {value.icon}
                </RadioCard>
              );
            })}
          </HStack>
          {descriptions.map((description) => (
            <Text key={ description }>{description}</Text>
          )) }
        </VStack>
        <Center h="500" w={ { base: 'full', lg: '65%' } }>
          <Flex
            w={ viewWidth }
            h="full"
            bg={ useColorModeValue('gray.100', 'gray.900') }
            borderRadius="2xl"
            p="2"
          >
            <iframe
              width="100%"
              height="100%"
              src={ link }
              title={ name }
            />
          </Flex>
        </Center>
      </Stack>
    </VStack>
  );
}

export default Project;
