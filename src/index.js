import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/index.css';
import { socket, SocketContext } from './utils/socketContext';

ReactDOM.render(
  <React.StrictMode>
    <SocketContext.Provider value={socket}>
      <App />
    </SocketContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
