import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import DarkModeContext from './components/context/DarkModeContext';
import  AuthContext  from './components/context/AuthContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <DarkModeContext> <AuthContext><App /></AuthContext> </DarkModeContext>
  </React.StrictMode>
);


