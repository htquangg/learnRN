/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect, useCallback} from 'react';
import {LogBox, StatusBar, StyleSheet, View} from 'react-native';

import {SafeAreaView} from 'react-native-safe-area-context';
import {colors, SearchBar, Icon} from 'react-native-elements';
import Header from './src/components/Header';
import {fetchData} from './src/services/fetchAPI';
import ListItems from './src/components/ListItems';
import 'react-native-gesture-handler';

const App = () => {
  const [text, setText] = useState('');
  const [dogs, setDogs] = useState([]);

  const handleChangeText = val => {
    setText(val);
  };

  const handleOnCancel = () => {
    setText('');
  };

  const handleSubmitEditing = () => {
    const tmpData = [...dogs];
    const dataSearch = tmpData.filter(item => item.name.includes(text));
    setDogs(dataSearch);
  };

  const getData = useCallback(async () => {
    const data = await fetchData();
    setDogs(data);
  }, [text]);

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
          onChangeText={handleChangeText}
          onSubmitEditing={handleSubmitEditing}
          onCancel={handleOnCancel}
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
