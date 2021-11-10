import {StyleSheet} from 'react-native';
import {colors} from 'react-native-elements';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 16,
    marginTop: 16,
  },
  label: {
    marginBottom: 8,
  },
  inputContainer: {
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 8,
  },
  inputContainerHeight: {
    height: 200,
  },
  input: {
    height: '100%',
  },
  button: {
    backgroundColor: colors.grey1,
  },
});

export default styles;
