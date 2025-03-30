import { createChatBotMessage } from 'react-chatbot-kit';
import React from 'react';
import MessageParser from './MessageParser';
import ActionProvider from './ActionProvider';

const config = {
  botName: 'Chatbot',
  initialMessages: [createChatBotMessage(`Hi! I'm here to help you.`)],
  customStyles: {
    botMessageBox: {
      backgroundColor: '#3a3d44',
      color: 'white',
      borderRadius: '8px',
      padding: '12px',
    },
    userMessageBox: {
      backgroundColor: '#3182ce',
      color: 'white',
      borderRadius: '8px',
      padding: '12px',
    },
    chatButton: {
      backgroundColor: '#3182ce',
    },
  },
  customComponents: {
    header: () => (
      <div style={{ 
        backgroundColor: '#2c2e33', 
        padding: '16px', 
        color: 'white', 
        fontSize: '16px', 
        fontWeight: 'bold',
        borderBottom: '1px solid rgba(255,255,255,0.1)'
      }}>
        Chat Assistant
      </div>
    ),
  },
  state: {
    messages: [],
  },
  widgets: [],
};

export default config;
