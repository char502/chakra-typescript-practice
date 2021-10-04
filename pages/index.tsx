import { Container, Flex } from '@chakra-ui/react';
import React from 'react';
import Cart from '../src/sections/cart';
import Details from '../src/sections/details';

const IndexPage = () => (
  // the container component by default has a padding of 16px which don't want so turn it off
  // Container component to keep content contained and centered
  // Can use Flec and Vertical Stack to stack the inner elements
  // when want to add extra styling, can use the style props which have access to the design tokens
  // built in Chakra Ui
  <Container maxW='container.xl' p={0}>
    <Flex
    // If only want to change between fewer values, use object syntax (because it's simpler)
      h={{ base: 'auto', md: '100vh' }}
      // use array syntax if want to provide different values for every breakpoint
      py={[0, 10, 20]}
      direction={{ base: 'column-reverse', md: 'row' }}
    >
      <Details />
      <Cart />
    </Flex>
  </Container>
);

export default IndexPage;
