import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import "../dist/css/main.css";

const container = document.getElementById('root'),
root = ReactDOM.createRoot(container);

root.render(<App />);