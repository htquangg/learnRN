import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {Icon} from 'react-native-elements';
import MenuIcon from '../../components/MenuIcon';
import styles from './styles';
import DiaryList from '../../components/DiaryList';
import {database} from '../../firebase';

const DiaryScreen = props => {
  const [data, setData] = useState([]);
  const {navigation} = props;

  useEffect(() => {
    // const diaries = database.ref('/diary').orderByValue().once('value');
    database
      .ref('/diary/')
      .once('value')
      .then(snapshot => {
        if (snapshot.exists()) {
          let diaries = [];
          for (let diary of Object.values(snapshot.val())) {
            diaries.push(diary);
          }
          diaries.sort((a, b) => b.createAt - a.createAt);
          setData(diaries);
        }
        // console.log(snapshot.val());
      });
  });

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

  const handleOnPress = () => {
    // TODO
    navigation.navigate('DiaryDetail');
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
