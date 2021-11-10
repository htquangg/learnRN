import React from 'react';
import {View, Text} from 'react-native';
import {formatTimeStamp} from '../../helpers';

import styles from './styles';

const DiaryItem = props => {
  const {hour, session, duration} = formatTimeStamp(props.data.createAt);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {duration === 0 ? (
          <View>
            <Text>Today</Text>
          </View>
        ) : duration === 1 ? (
          <View>
            <Text>{duration} day ago</Text>
          </View>
        ) : (
          <View>
            <Text>{duration} days ago</Text>
          </View>
        )}
      </View>
      <View style={styles.body}>
        <View style={styles.leftContent}>
          <View>
            <Text>{hour}</Text>
          </View>
          <View>
            <Text>{session}</Text>
          </View>
        </View>
        <View style={styles.rightContent}>
          <View>
            <Text style={styles.title}>{props.data.title}</Text>
          </View>
          <View>
            <Text>{props.data.content}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default DiaryItem;
