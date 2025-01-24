import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import { AuthContextProvider } from './contexts/AuthContext';
import { CartContextProvider } from './contexts/cartContext';
import './index.css';
import * as serviceWorker from './serviceWorker';
import store from './store/store';


const rootElement = document.getElementById('root');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <AuthContextProvider>
        <Provider store={store}>
          <CartContextProvider>
            <App />
          </CartContextProvider>
        </Provider>
      </AuthContextProvider>
    </React.StrictMode>
  );
} else {
  console.error("Root element not found. Unable to initialize the application.");
}

serviceWorker.register();