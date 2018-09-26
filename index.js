import React from 'react';
import {AppRegistry} from 'react-native';
import App from './src/App';
import {createStore} from 'redux';
import reducers from './src/Redux';
import {Provider} from 'react-redux';
import {name as appName} from './app.json';

const store = createStore(reducers);

const ReduxApp = () => (
  <Provider store={store}>
    <App/>
  </Provider>
);


AppRegistry.registerComponent(appName, () => ReduxApp);
