import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {Input, Button} from 'react-native-elements';
import Toast from 'react-native-toast-message';
import MenuIcon from '../../components/MenuIcon';
import {firebase, database} from '../../firebase';
import {generatedId} from '../../helpers';

import styles from './styles';

const DiaryDetailSreen = props => {
  const {navigation} = props;

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

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
          name="arrow-back-outline"
          onPress={() => {
            navigation.goBack();
          }}
        />
      ),
      headerRight: () => <View />,
    });
  }, []);

  const onChangeTitle = val => {
    setTitle(val.nativeEvent.text);
  };

  const onChangeContent = val => {
    setContent(val.nativeEvent.text);
  };

  const onPress = () => {
    if (title === '') {
      Toast.show({
        type: 'error',
        text1: 'Title is not empty!',
        visibilityTime: 2000,
        onPress: () => Toast.hide(),
      });
      return;
    }

    const data = {
      id: generatedId(),
      createAt: Date.now(),
      title,
      content,
    };

    database
      .ref('/diary')
      .child(data.id)
      .set(data)
      .then(() => {
        navigation.goBack();
        Toast.show({
          type: 'success',
          text1: 'Success',
          visibilityTime: 2000,
          onPress: () => Toast.hide(),
        });
      });
  };

  return (
    <View style={styles.container}>
      <Input
        placeholder="Day 1"
        label="Title"
        labelStyle={styles.label}
        inputContainerStyle={styles.inputContainer}
        onChange={onChangeTitle}
        autoFocus
      />
      <Input
        placeholder="Happy Day"
        label="Content"
        labelStyle={styles.label}
        inputStyle={styles.input}
        inputContainerStyle={StyleSheet.flatten([
          styles.inputContainer,
          styles.inputContainerHeight,
        ])}
        onChange={onChangeContent}
        multiline
      />
      <Button title="Submit" buttonStyle={styles.button} onPress={onPress} />
    </View>
  );
};

export default DiaryDetailSreen;
