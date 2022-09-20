import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';

import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement as Element);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
