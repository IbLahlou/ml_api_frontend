// src/App.jsx

import React, { useRef } from 'react';
import {
  ChakraProvider,
  Box,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Flex,
  VStack,
  Button,
} from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { HamburgerIcon } from '@chakra-ui/icons';

import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Data from './pages/Data';
import Metric from './pages/Metric';
import Contact from './pages/Contact';

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <ChakraProvider>
      <Router>
        <Flex h="100vh" direction={{ base: 'column', md: 'row' }}>
          {/* Hamburger Menu Button */}
          <IconButton
            icon={<HamburgerIcon />}
            display={{ base: 'block', md: 'none' }}
            onClick={onOpen}
            ref={btnRef}
            m={4}
            position="fixed"
            top="4"
            left="4"
          />
          {/* Drawer for Mobile */}
          <Drawer
            isOpen={isOpen}
            placement="left"
            onClose={onClose}
            finalFocusRef={btnRef}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>Menu</DrawerHeader>
              <DrawerBody>
                <VStack spacing={4} align="start">
                  <Button as={Link} to="/" onClick={onClose} w="full" textAlign="left">Home</Button>
                  <Button as={Link} to="/data" onClick={onClose} w="full" textAlign="left">Data</Button>
                  <Button as={Link} to="/metric" onClick={onClose} w="full" textAlign="left">Metric</Button>
                  <Button as={Link} to="/contact" onClick={onClose} w="full" textAlign="left">Contact</Button>
                </VStack>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
          {/* Desktop Sidebar */}
          <Box display={{ base: 'none', md: 'block' }} w="60%" h="full" position="fixed">
            <Sidebar />
          </Box>
          {/* Main Content */}
          <Box flex="1" ml={{ base: '0', md: '1%' }} p={8} overflowY="auto">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/data" element={<Data />} />
              <Route path="/metric" element={<Metric />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Box>
        </Flex>
      </Router>
    </ChakraProvider>
  );
}

export default App;
