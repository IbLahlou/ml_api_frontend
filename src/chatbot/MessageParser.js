// src/chatbot/MessageParser.jsx

class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    const lowercase = message.toLowerCase();

    const greetingKeywords = ["hello", "salam", "salut", "konishiwa", "hola"];
    const morningKeywords = ["bonjour", "good morning", "ohaio", "buenos dias", "sabah lkhir"];
    const wellBeingKeywords = ["labass", "fine", "bikhir", "bikhir ounta", "hamdolah", "hmd", "hmdlh", "ça roule", "ça va", "hamdolah ou nta", "fine and you"];
    const goodNightKeywords = ["bslama anmchi n3ss", "tsbah ala khir", "bonne nuit", "good night"];

    if (greetingKeywords.some(keyword => lowercase.includes(keyword))) {
      this.actionProvider.handleGreeting();
    } else if (morningKeywords.some(keyword => lowercase.includes(keyword))) {
      this.actionProvider.handleMorning();
    } else if (wellBeingKeywords.some(keyword => lowercase.includes(keyword))) {
      this.actionProvider.handleWellBeing();
    } else if (goodNightKeywords.some(keyword => lowercase.includes(keyword))) {
      this.actionProvider.handleGoodNight();
    } else {
      this.actionProvider.handleDefault(message);
    }
  }
}

export default MessageParser;
