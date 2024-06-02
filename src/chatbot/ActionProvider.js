// src/chatbot/ActionProvider.jsx

class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  handleGreeting = () => {
    const message = this.createChatBotMessage(
      "Salam kidayr(a) ana chatbot mghribi mia bel mia , chno lhaja li bghitini n3wnek(i) fiha ?"
    );
    this.setChatbotMessage(message);
  };

  handleMorning = () => {
    const message = this.createChatBotMessage(
      "sbah lkhir , kisb7ti , labass alik ?"
    );
    this.setChatbotMessage(message);
  };

  handleWellBeing = () => {
    const message = this.createChatBotMessage(
      "hamdolah tana bikhir, ki bghit n3wnk ?"
    );
    this.setChatbotMessage(message);
  };

  handleGoodNight = () => {
    const message = this.createChatBotMessage(
      "tsbah ala khir !"
    );
    this.setChatbotMessage(message);
  };

  handleDefault = (message) => {
    const responseMessage = this.createChatBotMessage(`You said: ${message}`);
    this.setChatbotMessage(responseMessage);
  };

  setChatbotMessage = (message) => {
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };
}

export default ActionProvider;
