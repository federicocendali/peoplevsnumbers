import { StyleSheet } from 'react-native';

import { theme } from '../../constants';

export const styles = StyleSheet.create({
  container: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.secondary,
    borderWidth: 2,
    borderRadius: 5,
    marginVertical: 10,
  },
  number: {
    fontSize: 20,
    fontFamily: 'Kanit-Bold',
    color: theme.colors.black,
  },
});
