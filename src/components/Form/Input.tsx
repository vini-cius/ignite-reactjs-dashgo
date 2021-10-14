import { Input as ChakraInput, FormControl, FormLabel, InputProps as ChakraInputProps } from '@chakra-ui/react'
import { forwardRef, ForwardRefRenderFunction } from 'react';

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({ name, label, ...rest }, ref) => {
  return (
    <FormControl>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <ChakraInput
        {...rest}
        name={name}
        id={name}
        focusBorderColor="pink.500"
        bgColor="gray.900"
        variant="filled"
        _hover={{ bg: 'gray.900' }}
        size="lg"
        ref={ref}
      />
    </FormControl>
  )
}

export const Input = forwardRef(InputBase);
