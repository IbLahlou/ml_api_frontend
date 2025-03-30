import React from 'react';
import { Box, VStack, Button, Text, Divider, useBreakpointValue } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Sidebar = ({ onClose }) => {
  const display = useBreakpointValue({ base: 'none', md: 'block' });

  return (
    <Box
      w={{ base: 'full', md: '250px' }}
      bg="#2c2e33"
      color="white"
      h="full"
      py="24px"
      px="16px"
      display={display}
      flexDirection="column"
      alignItems="flex-start"
      borderRight="1px solid"
      borderColor="rgba(255, 255, 255, 0.1)"
    >
      <VStack spacing={6} align="start" w="full">
        <Text fontSize="2xl" fontWeight="bold">Menu</Text>
        <Button as={Link} to="/" variant="link" color="white" w="full" textAlign="left" mt="50px" onClick={onClose}>Home</Button>
        <Divider borderColor="white" />
        <Button as={Link} to="/data" variant="link" color="white" w="full" textAlign="left" onClick={onClose}>Data</Button>
        <Divider borderColor="white" />
        <Button as={Link} to="/metric" variant="link" color="white" w="full" textAlign="left" onClick={onClose}>Metric</Button>
        <Divider borderColor="white" />
        <Button as={Link} to="/contact" variant="link" color="white" w="full" textAlign="left" onClick={onClose}>Contact</Button>
      </VStack>
    </Box>
  );
};

export default Sidebar;
