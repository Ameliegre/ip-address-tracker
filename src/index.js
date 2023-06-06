import React from 'react';
import ReactDOM from 'react-dom/client';
import { theme} from './theme.js';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
    <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&display=swap" rel="stylesheet"/>
     <App/>
    </ChakraProvider>
  </React.StrictMode>
);
