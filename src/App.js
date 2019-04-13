import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './store/reducers';

import AuthContainer from './components/auth/container';
import RegistrationContainer from './components/registration/container';

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AuthContainer></AuthContainer>
          <RegistrationContainer></RegistrationContainer>
        </div>
      </Provider>
    );
  }
}

export default App;
