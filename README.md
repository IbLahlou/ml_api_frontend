
# MLOps Frontend API (Prototype)

This project is a frontend application for MLOps, built with React and Chakra UI. It includes a chatbot for user interaction and is designed to work seamlessly with backend services. The project uses Vite for fast development and a modern build setup.

## Features

- **Chakra UI**: A simple, modular, and accessible component library.
- **React Router**: For client-side routing.
- **React Chatbot Kit**: A customizable chatbot component for user interaction.
- **Vite**: Next-generation frontend tooling for faster builds and development.
- **Responsive Design**: Ensures the application works on various devices.

## Getting Started

### Prerequisites

- Node.js (version 12 or higher)
- npm (version 6 or higher) or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/mlops-frontend-api.git
   cd mlops-frontend-api
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

   or

   ```bash
   yarn install
   ```

3. Install Chakra UI, React Router, and React Chatbot Kit:

   ```bash
   npm install @chakra-ui/react @emotion/react @emotion/styled framer-motion react-router-dom react-chatbot-kit
   ```

   or

   ```bash
   yarn add @chakra-ui/react @emotion/react @emotion/styled framer-motion react-router-dom react-chatbot-kit
   ```

### Running the Application

To start the development server, run:

```bash
npm run dev
```

or

```bash
yarn dev
```

The application will be available at `http://localhost:3000`.

### Building for Production

To build the application for production, run:

```bash
npm run build
```

or

```bash
yarn build
```

The output will be in the `dist` directory.

## Project Structure

```
mlops-frontend-api/
│
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Chatbot.jsx
│   │   ├── Sidebar.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Data.jsx
│   │   ├── Metric.jsx
│   │   ├── Contact.jsx
│   ├── chatbot/
│   │   ├── ActionProvider.jsx
│   │   ├── config.jsx
│   │   ├── MessageParser.jsx
│   ├── App.jsx
│   ├── index.jsx
│   └── vite.config.js
├── .gitignore
├── package.json
├── README.md
```

## Configuration

### Chatbot

The chatbot is configured in `src/chatbot/config.jsx`. You can customize the messages, styles, and behavior according to your needs.


## Acknowledgements

- [React](https://reactjs.org/)
- [Chakra UI](https://chakra-ui.com/)
- [React Chatbot Kit](https://fredrikoseberg.github.io/react-chatbot-kit-docs/)
- [Vite](https://vitejs.dev/)
