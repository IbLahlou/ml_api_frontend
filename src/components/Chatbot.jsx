import React from 'react';
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import config from '../chatbot/config.jsx';
import MessageParser from '../chatbot/MessageParser';
import ActionProvider from '../chatbot/ActionProvider';
import { Box } from '@chakra-ui/react';

const ChatbotComponent = () => {
  return (
    <Box
      maxWidth="300px"
      boxShadow="xl"
      borderRadius="md"
      overflow="hidden"
      bg="white"
      border="1px solid"
      borderColor="gray.200"
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
