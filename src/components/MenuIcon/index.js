import React from 'react';
import PropTypes from 'prop-types';
import {Pressable} from 'react-native';
import {Icon} from 'react-native-elements';
import styles from './styles';

const MenuIcon = props => {
  return (
    <Pressable onPress={props.onPress} style={styles.headerButtonContainer}>
      <Icon
        type="ionicon"
        name={props.name || 'menu-outline'}
        containerStyle={styles.headerButtonIcon}
        size={32}
      />
    </Pressable>
  );
};

MenuIcon.propTypes = {
  onPress: PropTypes.func,
  name: PropTypes.string,
};

export default MenuIcon;
