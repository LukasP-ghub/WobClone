import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import store from './store/store';
import { Provider } from 'react-redux';
import { CartContextProvider } from './store/cartContext';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <CartContextProvider>
        <App />
      </CartContextProvider>
    </Provider>,
   </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
