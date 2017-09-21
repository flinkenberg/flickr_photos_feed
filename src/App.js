import React from 'react';
import { Provider } from 'react-redux';
import store from './store';

import './styles/App.css';

import AppContainer from './containers/AppContainer';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer/>
      </Provider>
    );
  }
}

export default App;
