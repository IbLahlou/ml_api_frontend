
import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
import { HamburgerIcon, ChatIcon } from '@chakra-ui/icons';
import ChatbotComponent from './components/Chatbot';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Data from './pages/Data';
import Metric from './pages/Metric';
import Contact from './pages/Contact';

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isChatOpen, setIsChatOpen] = useState(false);
  const btnRef = useRef();

  return (
    <ChakraProvider>
      <Router>
        <Box minH="100vh" bg="#1a1b1e">
          <Flex direction={{ base: 'column', md: 'row' }}>
            {/* Mobile Menu Button */}
            <IconButton
              icon={<HamburgerIcon />}
              display={{ base: 'block', md: 'none' }}
              onClick={onOpen}
              ref={btnRef}
              position="fixed"
              top="4"
              left="4"
              zIndex="overlay"
              colorScheme="gray"
              variant="ghost"
            />

            {/* Mobile Drawer */}
            <Drawer isOpen={isOpen} placement="left" onClose={onClose} finalFocusRef={btnRef}>
              <DrawerOverlay />
              <DrawerContent bg="#2c2e33" color="white">
                <DrawerCloseButton />
                <DrawerHeader>Menu</DrawerHeader>
                <DrawerBody>
                  <VStack spacing={4} align="start">
                    <Button as={Link} to="/" onClick={onClose} variant="ghost" w="full" color="white">Home</Button>
                    <Button as={Link} to="/data" onClick={onClose} variant="ghost" w="full" color="white">Data</Button>
                    <Button as={Link} to="/metric" onClick={onClose} variant="ghost" w="full" color="white">Metric</Button>
                    <Button as={Link} to="/contact" onClick={onClose} variant="ghost" w="full" color="white">Contact</Button>
                  </VStack>
                </DrawerBody>
              </DrawerContent>
            </Drawer>

            {/* Desktop Sidebar */}
            <Box display={{ base: 'none', md: 'block' }} minW="250px" position="fixed" h="100vh">
              <Sidebar />
            </Box>

            {/* Main Content */}
            <Box
              as={motion.div}
              flex="1"
              ml={{ base: 0, md: '250px' }}
              p={{ base: 4, md: 8 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/data" element={<Data />} />
                <Route path="/metric" element={<Metric />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </Box>
          </Flex>

          {/* Floating Chat Button & Chat Window */}
          <Box position="fixed" bottom="4" right="4" zIndex="overlay">
            <AnimatePresence>
              {isChatOpen ? (
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  style={{ transformOrigin: 'bottom right' }}
                >
                  <Box
                    bg="#2c2e33"
                    borderRadius="lg"
                    boxShadow="dark-lg"
                    overflow="hidden"
                    maxW="350px"
                    maxH="500px"
                  >
                    <ChatbotComponent />
                  </Box>
                </motion.div>
              ) : null}
            </AnimatePresence>
            
            <IconButton
              icon={<ChatIcon />}
              onClick={() => setIsChatOpen(!isChatOpen)}
              colorScheme="blue"
              size="lg"
              rounded="full"
              shadow="lg"
              position="relative"
              zIndex={2}
              ml="auto"
              display="block"
            />
          </Box>
        </Box>
      </Router>
    </ChakraProvider>
  );
}

export default App;
