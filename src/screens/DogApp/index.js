import React, {useState, useEffect} from 'react';
import {StatusBar, View} from 'react-native';
import {SearchBar} from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {fetchData} from '../../services/fetchAPI';
import ListItems from '../../components/ListItems';
import MenuIcon from '../../components/MenuIcon';
import {DOG_DATA} from '../../constants/index';

import styles from './styles';

const DogAppScreen = props => {
  const {navigation} = props;

  const [text, setText] = useState('');
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    navigation.setOptions({
      headerTitleStyle: {
        fontWeight: 'bold',
        textAlign: 'center',
        alignSelf: 'center',
        flex: 1,
      },
      headerLeft: () => (
        <MenuIcon
          onPress={() => {
            navigation.openDrawer();
          }}
        />
      ),
      headerRight: () => <View />,
    });
  }, []);

  useEffect(() => {
    async function getData() {
      let data;
      try {
        data = await AsyncStorage.getItem(DOG_DATA);
        if (data) {
          data = JSON.parse(data);
        } else {
          data = await fetchData();
          await AsyncStorage.setItem(DOG_DATA, JSON.stringify(data));
        }
        setDogs(data);
      } catch (e) {}
    }

    getData();
  }, [text]);

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

  return (
    <View style={styles.container}>
      <StatusBar style={styles.bar} />
      <View style={styles.body}>
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
    </View>
  );
};

export default DogAppScreen;
