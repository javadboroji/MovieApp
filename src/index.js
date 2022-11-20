import React from 'react';
import ReactDOM from 'react-dom/client';
import { MovieContext } from './Context';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MovieContext>
    <App />
    </MovieContext>
  </React.StrictMode>
);

