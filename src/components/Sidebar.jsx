
import React from 'react';
import { Box, VStack, Button, Text, Flex, Icon } from '@chakra-ui/react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaDatabase, FaChartBar, FaEnvelope } from 'react-icons/fa';

const Sidebar = ({ onClose }) => {
  const location = useLocation();

  const MenuItem = ({ icon, children, to }) => {
    const isActive = location.pathname === to;
    return (
      <Button
        as={Link}
        to={to}
        variant="ghost"
        color="gray.300"
        w="full"
        justifyContent="flex-start"
        pl={4}
        py={6}
        borderRadius="0"
        backgroundColor={isActive ? "rgba(255, 255, 255, 0.1)" : "transparent"}
        _hover={{
          backgroundColor: "rgba(255, 255, 255, 0.05)",
          color: "white"
        }}
        leftIcon={<Icon as={icon} boxSize={5} />}
        onClick={onClose}
      >
        {children}
      </Button>
    );
  };

  return (
    <Box
      w={{ base: 'full', md: '240px' }}
      bg="#1E2124"
      h="100vh"
      position="fixed"
      left={0}
      top={0}
      borderRight="1px solid"
      borderColor="rgba(255, 255, 255, 0.1)"
    >
      <Flex direction="column" h="full">
        <Box p={4} borderBottom="1px solid" borderColor="rgba(255, 255, 255, 0.1)">
          <Text fontSize="lg" fontWeight="bold" color="white">Menu</Text>
        </Box>
        
        <VStack spacing={0} align="stretch" flex={1}>
          <MenuItem icon={FaHome} to="/">Home</MenuItem>
          <MenuItem icon={FaDatabase} to="/data">Data</MenuItem>
          <MenuItem icon={FaChartBar} to="/metric">Metric</MenuItem>
          <MenuItem icon={FaEnvelope} to="/contact">Contact</MenuItem>
        </VStack>
      </Flex>
    </Box>
  );
};

export default Sidebar;
