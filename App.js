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
import {colors, SearchBar, Icon} from 'react-native-elements';
import Header from './src/components/Header';
import {fetchData} from './src/services/fetchAPI';
import ListItems from './src/components/ListItems';
import 'react-native-gesture-handler';

const App = () => {
  const [text, setText] = useState('');
  const [dogs, setDogs] = useState([]);

  const handleChangeText = useCallback(val => {
    setText(val);
  }, []);

  const handleSubmitEditing = useCallback(() => {
    const tmpData = [...dogs];
    const dataSearch = tmpData.filter(item => item.name.includes(text));
    setDogs(dataSearch);
  }, [text]);

  const getData = useCallback(async () => {
    const data = await fetchData();
    setDogs(data);
  }, []);

  useEffect(() => {
    if (text.length === 0 && dogs.length === 0) {
      getData();
    }
  }, [getData, text, dogs]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style={styles.bar} />
      <View style={styles.body}>
        <Header text="Dog App" />
        <SearchBar
          lightTheme
          placeholder="Type here..."
          onChangeText={handleChangeText}
          onSubmitEditing={handleSubmitEditing}
          onCancel={() => setText('')}
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
    flex: 1,
    marginTop: 10,
  },
});

export default App;
