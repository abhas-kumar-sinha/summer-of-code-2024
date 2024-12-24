import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AppProvider } from './Components/GlobalContext/GlobalContext.jsx'

const ErrorBoundary = ({ children }) => {
  try {
    return children;
  } catch (error) {
    console.error('Error rendering:', error);
    return <div>Something went wrong!</div>;
  }
};

createRoot(document.getElementById('root')).render(
  <AppProvider>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </AppProvider>,
);
