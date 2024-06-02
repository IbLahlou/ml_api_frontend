import { createChatBotMessage } from 'react-chatbot-kit';
import React from 'react';
import MessageParser from './MessageParser';
import ActionProvider from './ActionProvider';

const config = {
  botName: 'Chatbot',
  initialMessages: [createChatBotMessage(`Hi! I'm here to help you.`)],
  customStyles: {
    botMessageBox: {
      backgroundColor: '#121212',
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
      backgroundColor: 'rgb(56, 75, 178)',
    },
  },
  customComponents: {
    header: () => (
      <div style={{ backgroundColor: '#121212', padding: '10px', color: 'white', fontSize: '16px', fontWeight: 'bold' }}>
        Conversation with Chatbot
      </div>
    ),
  },
  state: {
    messages: [],
  },
  widgets: [],
};

export default config;
