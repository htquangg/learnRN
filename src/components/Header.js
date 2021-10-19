import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Header, Text} from 'react-native-elements';
import PropTypes from 'prop-types';

const CustomHeader = props => {
  const centerComponent = () => {
    return (
      <View>
        <Text h4 style={styles.header}>
          {props.text}
        </Text>
      </View>
    );
  };

  return (
    <View>
      <Header placement="center" centerComponent={centerComponent}></Header>
    </View>
  );
};

PropTypes.defaultProps = {
  text: '',
};

PropTypes.propTypes = {
  text: PropTypes.string,
};

const styles = StyleSheet.create({
  header: {
    fontWeight: '600',
    textTransform: 'uppercase',
  },
});

export default React.memo(CustomHeader);
