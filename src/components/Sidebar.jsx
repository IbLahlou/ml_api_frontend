
import React from 'react';
import { Box, VStack, Button, Text, Flex, Icon } from '@chakra-ui/react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaDatabase, FaChartBar, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Sidebar = ({ onClose }) => {
  const location = useLocation();
  const MotionFlex = motion(Flex);

  const menuItems = [
    { icon: FaHome, text: 'Home', path: '/' },
    { icon: FaDatabase, text: 'Data', path: '/data' },
    { icon: FaChartBar, text: 'Metrics', path: '/metric' },
    { icon: FaEnvelope, text: 'Contact', path: '/contact' },
  ];

  return (
    <Box
      h="100%"
      bg="#2c2e33"
      w="250px"
      p={4}
      borderRight="1px solid"
      borderColor="rgba(255, 255, 255, 0.1)"
    >
      <VStack spacing={8} align="stretch">
        <Text fontSize="xl" fontWeight="bold" p={4}>
          MLOps Dashboard
        </Text>
        <VStack spacing={2} align="stretch">
          {menuItems.map((item) => (
            <MotionFlex
              key={item.path}
              as={Link}
              to={item.path}
              p={3}
              align="center"
              borderRadius="md"
              bg={location.pathname === item.path ? '#3a3d44' : 'transparent'}
              color={location.pathname === item.path ? 'white' : 'gray.400'}
              onClick={onClose}
              whileHover={{ backgroundColor: '#3a3d44' }}
              transition={{ duration: 0.2 }}
              _hover={{ textDecoration: 'none' }}
            >
              <Icon as={item.icon} mr={3} />
              <Text>{item.text}</Text>
            </MotionFlex>
          ))}
        </VStack>
      </VStack>
    </Box>
  );
};

export default Sidebar;
