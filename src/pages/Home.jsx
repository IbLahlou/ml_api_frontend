// src/pages/Home.jsx

import React from 'react';
import { VStack, Input, Button, Text, Center, Divider } from '@chakra-ui/react';

const Home = () => {
  return (
    <Center h="100vh" w="full">
      <VStack spacing={8} align="stretch" maxW="600px" w="full">
        <Text fontSize="3xl" fontWeight="bold" textAlign="center">Computer Vision Model</Text>
        <Divider borderColor="gray.200" />
        <Text>input 1</Text>
        <Input placeholder="Enter input 1" border="1px solid" />
        <Text>input 2</Text>
        <Input placeholder="Enter input 2" border="1px solid" />
        <Button colorScheme="blackAlpha">Compute</Button>
        <Divider borderColor="gray.200" />
        <Text>Output</Text>
        <Input placeholder="Output" isReadOnly border="1px solid" />
      </VStack>
    </Center>
  );
};

export default Home;
