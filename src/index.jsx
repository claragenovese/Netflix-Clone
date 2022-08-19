import React from 'react';
import App from './App';
import ReactDOM from 'react-dom/client';
import { ContextProvider } from './Context/Context';
import { BrowserRouter } from 'react-router-dom'
import './style/App.css'
import { AuthContextProvider } from './Context/AuthContext';
import { MovieContextProvider } from './Context/MovieContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <MovieContextProvider>
        <ContextProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ContextProvider>
      </MovieContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
 
