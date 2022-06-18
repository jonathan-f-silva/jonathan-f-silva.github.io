import React from 'react';
import {
  Box,
  useRadio,
  UseRadioProps,
  useColorModeValue,
} from '@chakra-ui/react';

type RadioCardProps = {
  children: React.ReactNode;
} & UseRadioProps;

const RadioCard: React.FC<RadioCardProps> = (props) => {
  const { children } = props;
  const { getInputProps, getCheckboxProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as="label">
      <input { ...input } />
      <Box
        { ...checkbox }
        cursor="pointer"
        borderWidth="1px"
        borderRadius="md"
        boxShadow="md"
        _checked={ {
          bg: useColorModeValue('blue.500', 'blue.900'),
          color: 'white',
          borderColor: useColorModeValue('blue.500', 'blue.900'),
        } }
        _focus={ {
          boxShadow: 'outline',
        } }
        p={ 1.5 }
      >
        {children}
      </Box>
    </Box>
  );
};
export default RadioCard;
