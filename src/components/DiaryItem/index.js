import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

const DiaryItem = props => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>3 days ago</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.leftContent}>
          <View>
            <Text>4.21</Text>
          </View>
          <View>
            <Text>PM</Text>
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
