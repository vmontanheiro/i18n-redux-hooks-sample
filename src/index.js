import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { persistor, store } from './redux/store';
import I18nProvider from './services/i18n/I18nProvider';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <I18nProvider>
        <App />
      </I18nProvider>
    </PersistGate>
  </Provider>,
  document.getElementById(`root`),
);

serviceWorker.unregister();
