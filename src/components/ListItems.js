import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import Item from './Item';

const ListItems = props => {
  const renderItem = ({item}) => {
    return <Item data={item} />;
  };

  return (
    <FlatList
      style={styles.container}
      data={props.data}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
  },
});

ListItems.defaultProp = {
  data: [],
};

ListItems.propTypes = {
  data: PropTypes.array,
};

export default React.memo(ListItems);
