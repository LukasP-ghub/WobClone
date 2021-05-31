import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import store from './store/store';
import { Provider } from 'react-redux';
import { CartContextProvider } from './store/cartContext';
import { AuthContextProvider } from './store/AuthContext';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <Provider store={store}>
        <CartContextProvider>
          <App />
        </CartContextProvider>
      </Provider>
    </AuthContextProvider>,
   </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
