/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {Provider} from 'react-redux';
import Ecommerce from './src/ecommerce';

import {store} from './src/redux/Store';
const App = () => {
  return (
    <Provider store={store}>
      <Ecommerce />
    </Provider>
  );
};

export default App;
