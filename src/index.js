import React from 'react';
import App from './App';
import rootReducer from './reducers/rootReduser';
import './index.css';
import * as serviceWorker from './serviceWorker';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container);
const store = createStore(rootReducer);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

serviceWorker.unregister();
