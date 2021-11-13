import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {Icon} from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MenuIcon from '../../components/MenuIcon';
import styles from './styles';
import DiaryList from '../../components/DiaryList';
import {database} from '../../firebase';
import {DIARY_DATA} from '../../constants';

const DiaryScreen = props => {
  const [data, setData] = useState([]);

  const {navigation} = props;

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

  async function getData(isFetch = false) {
    let diaries;

    diaries = await AsyncStorage.getItem(DIARY_DATA);
    try {
      if (isFetch || diaries === null) {
        console.log('@@Firebase');
        const snapshot = await database.ref('/diary').once('value');
        if (snapshot.exists()) {
          diaries = [];
          for (let diary of Object.values(snapshot.val())) {
            diaries.push(diary);
          }
          diaries.sort((a, b) => b.createAt - a.createAt);

          await AsyncStorage.setItem(DIARY_DATA, JSON.stringify(diaries));
        }
      } else {
        console.log('@@AsyncStorage');
        diaries = JSON.parse(diaries);
      }

      return diaries;
    } catch (e) {
      /* handle error */
    }
  }

  useEffect(() => {
    async function loadData() {
      const data = await getData();
      if (data) {
        setData(data);
      }
    }

    loadData();
    return () => {
      setData(null);
    };
  }, []);

  const onGoBack = async val => {
    if (val) {
      const data = await getData(true);
      if (data) {
        setData(data);
      }
    }
  };

  const handleOnPress = () => {
    navigation.navigate('DiaryDetail', {
      onGoBack: onGoBack,
    });
  };

  return (
    <View style={styles.container}>
      <DiaryList data={data} />
      <Icon
        type="ionicon"
        name="add-circle-sharp"
        size={56}
        containerStyle={styles.plusButton}
        onPress={handleOnPress}
      />
    </View>
  );
};

export default DiaryScreen;
