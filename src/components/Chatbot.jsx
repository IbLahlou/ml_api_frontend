
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
      maxWidth="350px"
      maxHeight="500px"
      overflow="auto"
      bg="#2c2e33"
      color="white"
      borderRadius="lg"
      sx={{
        '.react-chatbot-kit-chat-container': {
          background: '#2c2e33',
          border: 'none',
        },
        '.react-chatbot-kit-chat-bot-message': {
          backgroundColor: '#3a3d44',
          color: 'white',
        },
        '.react-chatbot-kit-chat-message-container': {
          backgroundColor: '#2c2e33',
        },
        '.react-chatbot-kit-chat-input': {
          backgroundColor: '#3a3d44',
          border: '1px solid rgba(255,255,255,0.1)',
          color: 'white',
        },
        '.react-chatbot-kit-chat-btn-send': {
          backgroundColor: '#3182ce',
        },
      }}
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
