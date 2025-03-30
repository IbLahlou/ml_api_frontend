
import React from 'react';
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import config from '../chatbot/config.jsx';
import MessageParser from '../chatbot/MessageParser';
import ActionProvider from '../chatbot/ActionProvider';
import { Box, useColorModeValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const ChatbotComponent = () => {
  const bgColor = useColorModeValue('white', 'gray.800');
  
  return (
    <Box
      as={motion.div}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
      maxWidth="300px"
      boxShadow="2xl"
      borderRadius="lg"
      overflow="hidden"
      bg={bgColor}
      border="1px solid"
      borderColor="gray.200"
      transform="auto"
      _hover={{ boxShadow: "2xl" }}
    >
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </Box>
  );
};

export default ChatbotComponent;
