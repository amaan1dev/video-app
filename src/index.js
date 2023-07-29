import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import VideoContextProvider from './contexts/VideoContext';

ReactDOM.render(
  <React.StrictMode>
    <VideoContextProvider>
      <App />
    </VideoContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
