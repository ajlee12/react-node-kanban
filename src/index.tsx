import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import store from './store';
import './styles.css';

render(
  <Provider store={store}>
    <React.StrictMode>
      Application Kanban Board
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
