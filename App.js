/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';

import {SafeAreaView} from 'react-native-safe-area-context';
import {colors} from 'react-native-elements';
import Header from './src/components/Header';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style={styles.bar} />
      <View style={styles.body}>
        <Header text="Dog App" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  bar: {
    backgroundColor: colors.primary,
  },
  body: {
    marginTop: 10,
  },
});

export default App;
