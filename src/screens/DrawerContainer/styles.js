import {StyleSheet} from 'react-native';
import {colors} from 'react-native-elements';

const styles = StyleSheet.create({
  content: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'flex-start',
    paddingHorizontal: 20,
  },
  titleButton: {
    color: colors.black,
    marginLeft: 8,
  },
});

export default styles;
