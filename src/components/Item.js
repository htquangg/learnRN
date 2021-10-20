import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Animated,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import {Swipeable} from 'react-native-gesture-handler';

import {Card, Text} from 'react-native-elements';

const Item = props => {
  const rightSwipeActions = (progress, dragX) => {
    const scale = dragX.interpolate({
      inputRange: [0, 200],
      outputRange: [1, 0],
      extrapolate: 'clamp',
    });

    return (
      <TouchableOpacity
        style={styles.rightSwipeContainer}
        activeOpacity={0.6}
        onPress={() => {}}>
        <View
          style={{
            justifyContent: 'flex-start',
            alignItems: 'center',
            height: 200,
          }}>
          <Animated.Text
            style={{
              transform: [{scale: scale}],
              fontSize: 24,
            }}>
            {props.data.breed_group}
          </Animated.Text>
          <Text h5>{props.data.origin}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Card>
        <Card.Title h3>{props.data.name}</Card.Title>
        <Swipeable renderRightActions={rightSwipeActions}>
          <Image
            style={styles.image}
            resizeMode="contain"
            source={{uri: props.data.url}}
          />
          <Text h5 style={{textAlign: 'center', marginTop: 10}}>
            {props.data.bred_for}
          </Text>
        </Swipeable>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  image: {
    width: '100%',
    height: 200,
  },
  rightSwipeContainer: {
    flex: 1,
  },
});

Item.defaultProp = {
  data: {},
};

Item.propTypes = {
  data: PropTypes.object,
};

export default React.memo(Item);
