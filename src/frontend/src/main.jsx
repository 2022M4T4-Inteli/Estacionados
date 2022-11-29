import React from 'react';
import ReactDOM from 'react-dom/client';
import { default as Router } from './routes/router';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);