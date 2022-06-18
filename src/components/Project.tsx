import {
  Box, HStack, VStack, Center, Flex,
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
      width: '1024px',
      icon: <MdDesktopMac />,
    },
  ];
  const [viewWidth, setViewWidth] = useState('1024px');
  const { getRadioProps } = useRadioGroup({
    name: 'displaySize',
    defaultValue: options[2].width,
    onChange: setViewWidth,
  });

  return (
    <VStack w="full" h="600" p="5">
      <Box />
      <HStack w="full" h="full" justifyContent="space-evenly">
        <VStack maxW="400px">
          <Image
            alt={ `Logo do projeto ${name}` }
            // eslint-disable-next-line max-len
            src={ logo }
          />
          <Heading>{ name }</Heading>
          <HStack>
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
        <Center h="full" w="65%">
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
      </HStack>
    </VStack>
  );
}

export default Project;
