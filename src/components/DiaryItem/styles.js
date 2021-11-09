import {StyleSheet} from 'react-native';
import {colors} from 'react-native-elements';

const styles = StyleSheet.create({
  container: {
    marginBottom: 8,
    marginHorizontal: 'auto',
  },
  header: {
    marginBottom: 8,
  },
  headerText: {
    color: colors.grey0,
  },
  body: {
    flexDirection: 'row',
    backgroundColor: colors.grey4,
    borderRadius: 5,
    paddingVertical: 10,
  },
  leftContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: 8,
  },
  rightContent: {
    flex: 4,
    paddingLeft: 8,
  },
  title: {
    fontWeight: 'bold',
  },
});

export default styles;
