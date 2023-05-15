import { StyleSheet, Dimensions } from 'react-native';

import { theme } from '../../constants';

const { height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
    paddingVertical: 20,
  },
  content: {
    height: height * 0.4,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
  },
  title: {
    fontSize: 18,
    fontFamily: 'Kanit-Regular',
  },
  buttonContainer: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 10,
  },
});
