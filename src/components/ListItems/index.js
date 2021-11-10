import React, {useState, useRef} from 'react';
import {FlatList} from 'react-native';
import PropTypes from 'prop-types';
import Item from '../Item';
import {Icon, colors} from 'react-native-elements';
import {SafeAreaView} from 'react-native-safe-area-context';

import styles from './styles';

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
          name="arrow-up-outline"
          type="ionicon"
          raised
          reverse
          containerStyle={styles.scrollTopButton}
          onPress={scrollTopHandler}
        />
      )}
    </SafeAreaView>
  );
};

ListItems.defaultProp = {
  data: [],
};

ListItems.propTypes = {
  data: PropTypes.array,
};

export default React.memo(ListItems);
