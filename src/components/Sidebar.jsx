import React from 'react';
import { Box, VStack, Text, Icon, Link as ChakraLink } from '@chakra-ui/react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaProjectDiagram, FaBlog, FaNewspaper, FaEnvelope, FaBriefcase, FaCertificate, FaTasks } from 'react-icons/fa';

const Sidebar = ({ onClose }) => {
  const location = useLocation();

  const navItems = [
    { name: 'Home', icon: FaHome, path: '/' },
    { name: 'Projects', icon: FaProjectDiagram, path: '/projects' },
    { name: 'Blog', icon: FaBlog, path: '/blog' },
    { name: 'Articles', icon: FaNewspaper, path: '/articles' },
    { name: 'Experience', icon: FaBriefcase, path: '/experience' },
    { name: 'Certifications', icon: FaCertificate, path: '/certifications' },
    { name: 'Activities', icon: FaTasks, path: '/activities' },
    { name: 'Contact', icon: FaEnvelope, path: '/contact' }
  ];

  return (
    <Box bg="#1E2124" h="100vh" w="250px" color="white" p={4}>
      <VStack spacing={4} align="stretch">
        {navItems.map((item) => (
          <ChakraLink
            as={Link}
            to={item.path}
            key={item.name}
            p={3}
            borderRadius="md"
            onClick={onClose}
            bg={location.pathname === item.path ? '#2c2e33' : 'transparent'}
            _hover={{ bg: '#2c2e33', textDecoration: 'none' }}
          >
            <Box display="flex" alignItems="center">
              <Icon as={item.icon} mr={3} />
              <Text>{item.name}</Text>
            </Box>
          </ChakraLink>
        ))}
      </VStack>
    </Box>
  );
};

export default Sidebar;