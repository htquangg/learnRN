import React from 'react';
import {View, Text, Animated, TouchableOpacity, StyleSheet} from 'react-native';
import {formatTimeStamp} from '../../helpers';
import {Swipeable} from 'react-native-gesture-handler';

import styles from './styles';

const DiaryItem = props => {
  const {hour, session, duration} = formatTimeStamp(props.data.createAt);

  const rightSwipeActions = (progress, dragX) => {
    const scale = dragX.interpolate({
      inputRange: [0, 200],
      outputRange: [1, 0],
      extrapolate: 'clamp',
    });

    const animatedTextStyle = {
      transform: [{scale: scale}],
    };
    return (
      <TouchableOpacity
        style={styles.rightSwipeContainer}
        activeOpacity={0.6}
        onPress={props.onPressDelete}
      >
        <View style={styles.rightSwipeBody}>
          <Animated.Text
            style={StyleSheet.flatten([
              styles.rightSwipeText,
              animatedTextStyle,
            ])}
          >
            Delete
          </Animated.Text>
        </View>
      </TouchableOpacity>
    );
  };

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

      <Swipeable renderRightActions={rightSwipeActions}>
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
      </Swipeable>
    </View>
  );
};

export default DiaryItem;
