import React from 'react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import reducer from './src/redux/reducers';
import {
  // Main,
  Todo,
} from './src/screens';
import { Header } from './src/components';

const store = configureStore({
  reducer,
});

const App = () => {
  return (
    <Provider store={store}>
      {/* <Header /> */}
      <Todo />
    </Provider>
  );
};

export default App;
