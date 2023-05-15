import { useFonts } from 'expo-font';
import { useState } from 'react';
import { ActivityIndicator, View } from 'react-native';

import { Header } from './components';
import { theme } from './constants';
import { Game, StartGame, GameOver } from './screens/index';
import { styles } from './styles';

export default function App() {
  const [userNumber, setUserNumber] = useState(null);
  const [guessRounds, setGuessRounds] = useState(0);
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

  const onGameOver = (rounds) => {
    setGuessRounds(rounds);
  };

  const onRestart = () => {
    setUserNumber(null);
    setGuessRounds(0);
  };

  const Content = () => {
    if (userNumber && guessRounds <= 0) {
      return <Game userNumber={userNumber} onGameOver={onGameOver} />;
    }

    if (guessRounds > 0) {
      return <GameOver rounds={guessRounds} onRestart={onRestart} userNumber={userNumber} />;
    }

    return <StartGame onStartGame={onStartGame} />;
  };

  return (
    <View style={styles.container}>
      <Header title={headerTitle} />
      <Content />
    </View>
  );
}
