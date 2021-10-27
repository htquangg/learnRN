import React, {useState, useRef} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import Item from './Item';
import {Icon, colors} from 'react-native-elements';
import {SafeAreaView} from 'react-native-safe-area-context';

const ListItems = props => {
  const listRef = useRef(null);
  const [contentVerticalOffset, setContentVerticalOffset] = useState(0);

  const renderItem = ({item}) => {
    return <Item data={item} />;
  };

  const scrollTopHandler = () => {
    if (listRef.current) {
      listRef.current.scrollToOffset({offset: 0, animated: true});
    }
  };

  const onScrollHandler = event => {
    setContentVerticalOffset(event.nativeEvent.contentOffset.y);
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={props.data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        onScroll={onScrollHandler}
        ref={listRef}
      />

      {contentVerticalOffset > 300 && (
        <Icon
          name="north"
          type="material"
          raised
          reverse
          color={colors.primary}
          containerStyle={styles.scrollTopButton}
          onPress={scrollTopHandler}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 8,
  },
  scrollTopButton: {
    position: 'absolute',
    bottom: 0,
    right: 10,
  },
});

ListItems.defaultProp = {
  data: [],
};

ListItems.propTypes = {
  data: PropTypes.array,
};

export default React.memo(ListItems);
