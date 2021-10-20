/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect, useCallback} from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';

import {SafeAreaView} from 'react-native-safe-area-context';
import {colors, SearchBar, Card, Text} from 'react-native-elements';
import Header from './src/components/Header';
import {fetchData} from './src/services/fetchAPI';
import ListItems from './src/components/ListItems';
import 'react-native-gesture-handler';

const App = () => {
  const [text, setText] = useState('');
  const [dogs, setDogs] = useState([]);
  const onChangeText = val => {
    setText(val);
  };

  const getData = useCallback(async () => {
    const data = await fetchData();
    setDogs(data);
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style={styles.bar} />
      <View style={styles.body}>
        <Header text="Dog App" />
        <SearchBar
          lightTheme
          placeholder="Type here..."
          onChangeText={onChangeText}
          onSubmitEditing={() => console.log('okkkkk')}
          value={text}
        />
        <ListItems data={dogs} />
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
