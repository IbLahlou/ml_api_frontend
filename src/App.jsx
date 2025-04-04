import React, { useRef, useState } from 'react';
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
  useColorMode,
  Button,
  useColorModeValue
} from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HamburgerIcon, ChatIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import ChatbotComponent from './components/Chatbot';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
import Articles from './pages/Articles';
import Contact from './pages/Contact';
import Experience from './pages/Experience';
import Certifications from './pages/Certifications';
import Activities from './pages/Activities';

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isChatOpen, setIsChatOpen] = useState(false);
  const btnRef = useRef();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <ChakraProvider>
      <Router>
        <Box minH="100vh" bg={useColorModeValue('#f0f0f0', '#1a1b1e')}> {/* Added colorModeValue for background */}
          <Flex>
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

            <Drawer isOpen={isOpen} placement="left" onClose={onClose} finalFocusRef={btnRef}>
              <DrawerOverlay />
              <DrawerContent bg={useColorModeValue('#f0f0f0', '#1E2124')} color={useColorModeValue('black', 'white')}>
                <DrawerCloseButton />
                <DrawerHeader>Navigation</DrawerHeader>
                <DrawerBody>
                  <Sidebar onClose={onClose} />
                </DrawerBody>
              </DrawerContent>
            </Drawer>

            <Box display={{ base: 'none', md: 'block' }} minW="250px" h="100vh">
              <Sidebar />
            </Box>

            <Box flex="1" p={4} ml={{ base: 0, md: '250px' }}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/articles" element={<Articles />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/certifications" element={<Certifications />} />
                <Route path="/activities" element={<Activities />} />
              </Routes>
            </Box>
          </Flex>

          <Box position="fixed" bottom="4" right="4" zIndex="overlay">
            {isChatOpen && (
              <Box opacity={1} transition="all 0.2s">
                <Box bg={useColorModeValue('#fff', '#2c2e33')} borderRadius="lg" boxShadow="dark-lg" maxW="350px" maxH="500px">
                  <ChatbotComponent />
                </Box>
              </Box>
            )}

            <IconButton
              icon={<ChatIcon />}
              onClick={() => setIsChatOpen(!isChatOpen)}
              colorScheme="blue"
              size="lg"
              rounded="full"
              shadow="lg"
              ml="auto"
            />
          </Box>
          <Button onClick={toggleColorMode} pos="fixed" top="4" right="4" zIndex="overlay">
            {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          </Button>
        </Box>
      </Router>
    </ChakraProvider>
  );
}

export default App;