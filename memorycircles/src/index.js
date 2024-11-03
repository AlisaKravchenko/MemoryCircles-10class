import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createLevelsBestStorage } from './utils';

const root = ReactDOM.createRoot(document.getElementById('root'));

if (!localStorage.getItem('1')){
    createLevelsBestStorage()
}

root.render(
//   <React.StrictMode>
    <App />
//   </React.StrictMode>
);

reportWebVitals();
