import { StyleSheet } from 'react-native';

import { theme } from '../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 0,
  },
  image: {
    width: '100%',
    height: 200,
  },
  rounds: {
    paddingVertical: 10,
    fontSize: 16,
    fontFamily: 'Kanit-Regular',
  },
  selectedNumber: {
    fontSize: 16,
    fontFamily: 'Kanit-Regular',
    paddingVertical: 5,
  },
  buttonContainer: {
    paddingVertical: 15,
  },
});
