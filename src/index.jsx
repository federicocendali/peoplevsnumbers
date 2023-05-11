import { useFonts } from 'expo-font';
import { useState } from 'react';
import { ActivityIndicator, View } from 'react-native';

import { Header } from './components';
import { theme } from './constants';
import { Game, StartGame } from './screens/index';
import { styles } from './styles';

export default function App() {
  const [userNumber, setUserNumber] = useState(null);
  const [loaded] = useFonts({
    'Kanit-Bold': require('../assets/fonts/Kanit-Bold.ttf'),
    'Kanit-Light': require('../assets/fonts/Kanit-Light.ttf'),
    'Kanit-Regular': require('../assets/fonts/Kanit-Regular.ttf'),
  });

  if (!loaded) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color={theme.colors.primary} />
      </View>
    );
  }

  const headerTitle = userNumber ? 'Game' : 'Welcome';

  const onStartGame = (number) => {
    setUserNumber(number);
  };

  const Content = () =>
    userNumber ? <Game userNumber={userNumber} /> : <StartGame onStartGame={onStartGame} />;

  return (
    <View style={styles.container}>
      <Header title={headerTitle} />
      <Content />
    </View>
  );
}
