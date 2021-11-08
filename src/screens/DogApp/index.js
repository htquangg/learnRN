import React, {useState, useEffect, useCallback} from 'react';
import {StatusBar, View} from 'react-native';
import {SearchBar} from 'react-native-elements';
import {fetchData} from '../../services/fetchAPI';
import ListItems from '../../components/ListItems';
import MenuIcon from '../../components/MenuIcon';

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
