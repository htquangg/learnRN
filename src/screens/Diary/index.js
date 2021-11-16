import React, {useState, useEffect, useRef} from 'react';
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
  const [isFetch, setIsFetch] = useState({
    loading: false
  })


  const {navigation, route} = props;

  const onGoBack = async val => {
    if (val) {
      const data = await getData(true);
      if (data) {
        setData(data);
        setIsFetch(prev => {...prev})
      }
    }
  };

  if(route.params && route.params.isFetch){
    const val = route.params.isFetch
    console.log(isFetch)
    if(val && isFetch.loading === false){
    onGoBack(val);
    }
  }

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

  // const onGoBack = async val => {
  //   if (val) {
  //     const data = await getData(true);
  //     if (data) {
  //       setData(data);
  //     }
  //   }
  // };

  const handleOnPress = () => {
    navigation.navigate('DiaryDetail', {
      onGoBack: onGoBack,
    });
  };

  const handleOnPressDelete = async (item, index) => {
    try {
      const diariesLocal = await AsyncStorage.getItem(DIARY_DATA);
      const diariesLocalParse = JSON.parse(diariesLocal);

      diariesLocalParse.splice(index, 1);

      await database.ref('/diary').child(item.id).remove();
      await AsyncStorage.setItem(DIARY_DATA, JSON.stringify(diariesLocalParse));

      setData(diariesLocalParse);
    } catch (e) {}
  };

  return (
    <View style={styles.container}>
      <DiaryList data={data} onPressDelete={handleOnPressDelete} />
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
