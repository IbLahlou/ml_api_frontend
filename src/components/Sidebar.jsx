// src/components/Sidebar.jsx

import React from 'react';
import { Box, VStack, Button, Text, Divider } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <Box
      w={{ base: 'full', md: '20%' }}
      bg="black"
      color="white"
      h="full"
      pt="50px"
      pl={{ base: '20px', md: '70px' }}
      pr={{ base: '20px', md: '200px' }}
      borderRadius="md"
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      m={15}
    >
      <VStack spacing={6} align="start" w="full">
        <Text fontSize="2xl" fontWeight="bold">Menu</Text>
        <Button as={Link} to="/" variant="link" color="white" w="full" textAlign="left" mt="50px">Home</Button>
        <Divider borderColor="white" />
        <Button as={Link} to="/data" variant="link" color="white" w="full" textAlign="left">Data</Button>
        <Divider borderColor="white" />
        <Button as={Link} to="/metric" variant="link" color="white" w="full" textAlign="left">Metric</Button>
        <Divider borderColor="white" />
        <Button as={Link} to="/contact" variant="link" color="white" w="full" textAlign="left">Contact</Button>
      </VStack>
    </Box>
  );
};

export default Sidebar;
