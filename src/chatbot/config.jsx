// src/chatbot/config.jsx

import { createChatBotMessage } from 'react-chatbot-kit';
import React from 'react';

const config = {
  botName: 'Chatbot',
  initialMessages: [createChatBotMessage(`Hi! I'm here to help you.`)],
  customStyles: {
    botMessageBox: {
      backgroundColor: '#3182ce',
      color: 'white',
      borderRadius: '12px',
      padding: '10px',
    },
    userMessageBox: {
      backgroundColor: '#e2e8f0',
      color: 'black',
      borderRadius: '12px',
      padding: '10px',
    },
    chatButton: {
      backgroundColor: '#38b2ac',
    },
  },
  customComponents: {
    header: () => (
      <div style={{ backgroundColor: '#3182ce', padding: '10px', color: 'white', fontSize: '16px', fontWeight: 'bold' }}>
        Conversation with Chatbot
      </div>
    ),
  },
};

export default config;
