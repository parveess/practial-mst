import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

/**
 * Entry Point for the React Application
 * 
 * This file:
 * 1. Imports React and ReactDOM
 * 2. Selects the root DOM element (with id 'root')
 * 3. Renders the App component with StrictMode
 * 
 * StrictMode: A tool for highlighting potential problems in the application
 * It doesn't render any visible UI but activates additional development checks
 */
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* App is the root component that renders the entire application */}
    <App />
  </StrictMode>,
);
