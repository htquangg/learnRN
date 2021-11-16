import React from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';
import {Button, Icon, colors} from 'react-native-elements';

import styles from './styles';

export default function DrawerContainer(props) {
  const {navigation} = props;
  return (
    <View style={styles.content}>
      <View style={styles.container}>
        <Button
          title="Dog"
          type="clear"
          icon={<Icon type="ionicon" name="logo-tux" />}
          titleStyle={styles.titleButton}
          onPress={() => {
            navigation.navigate('Dog');
            navigation.closeDrawer();
          }}
        />
        <Button
          title="Diary"
          type="clear"
          icon={<Icon type="ionicon" name="receipt-outline" />}
          titleStyle={styles.titleButton}
          onPress={() => {
            navigation.navigate('Main');
            navigation.closeDrawer();
          }}
        />
      </View>
    </View>
  );
}

DrawerContainer.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }),
};
