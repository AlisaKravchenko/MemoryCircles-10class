import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createLocalStorage } from './utils';

const root = ReactDOM.createRoot(document.getElementById('root'));

if (!localStorage.getItem('1')){
    createLocalStorage()
}

root.render(
//   <React.StrictMode>
    <App />
//   </React.StrictMode>
);

