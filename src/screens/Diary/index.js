import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import MenuIcon from '../../components/MenuIcon';
import styles from './styles';
import DiaryList from '../../components/DiaryList';

const DiaryScreen = props => {
  const {navigation} = props;

  const data = [
    {
      id: 1,
      title: 'text1',
      content: 'text111',
    },
    {
      id: 2,
      title: 'text2',
      content: 'text111',
    },
    {
      id: 3,
      title: 'text3',
      content: 'text111',
    },
    {
      id: 4,
      title: 'text4',
      content: 'text111',
    },
  ];

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

  return (
    <View style={styles.container}>
      <DiaryList data={data} />
    </View>
  );
};

export default DiaryScreen;
