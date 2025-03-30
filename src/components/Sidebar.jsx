
import React, { useState } from 'react';
import { Box, IconButton, Tooltip, VStack, useColorModeValue } from '@chakra-ui/react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaProjectDiagram, FaBlog, FaNewspaper, FaEnvelope, FaBriefcase, FaCertificate, FaTasks, FaChevronRight, FaChevronLeft } from 'react-icons/fa';

const Sidebar = ({ onClose }) => {
  const location = useLocation();
  const [isExpanded, setIsExpanded] = useState(false);
  const bg = useColorModeValue('gray.100', 'gray.900');
  const iconColor = useColorModeValue('gray.600', 'gray.300');

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
    <Box 
      bg={bg}
      h="100vh" 
      w={isExpanded ? "200px" : "60px"} 
      transition="width 0.2s"
      position="relative"
    >
      <IconButton
        icon={isExpanded ? <FaChevronLeft /> : <FaChevronRight />}
        position="absolute"
        right="-12px"
        top="20px"
        zIndex="overlay"
        size="sm"
        onClick={() => setIsExpanded(!isExpanded)}
      />
      <VStack spacing={4} align="stretch" pt={4}>
        {navItems.map((item) => (
          <Tooltip 
            key={item.name} 
            label={item.name} 
            placement="right" 
            isDisabled={isExpanded}
          >
            <Box
              as={Link}
              to={item.path}
              p={3}
              borderRadius="md"
              onClick={onClose}
              bg={location.pathname === item.path ? useColorModeValue('gray.200', 'gray.700') : 'transparent'}
              _hover={{ bg: useColorModeValue('gray.200', 'gray.700') }}
              display="flex"
              alignItems="center"
              justifyContent={isExpanded ? "flex-start" : "center"}
            >
              <Box as={item.icon} color={iconColor} />
            </Box>
          </Tooltip>
        ))}
      </VStack>
    </Box>
  );
};

export default Sidebar;
