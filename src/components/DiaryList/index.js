import React from 'react';
import {View, FlatList} from 'react-native';
import DiaryItem from '../DiaryItem';

import styles from './styles';

const DiaryList = props => {
  const renderDiary = ({item, index}) => {
    return (
      <DiaryItem
        data={item}
        onPressDelete={() => props.onPressDelete(item, index)}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={props.data}
        renderItem={renderDiary}
        keyExtractor={diary => diary.id}
        style={styles.body}
      />
    </View>
  );
};

export default DiaryList;
