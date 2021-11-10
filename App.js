/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import AppContainer from './src/navigations/AppNavigation';
import Toast from 'react-native-toast-message';
import 'react-native-gesture-handler';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <AppContainer />
      <Toast />
    </SafeAreaView>
  );
};

export default App;
