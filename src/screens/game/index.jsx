import { useState, useRef, useEffect } from 'react';
import { Button, Text, View, Alert, ScrollView } from 'react-native';

import { styles } from './styles';
import { Card, NumberContainer } from '../../components';
import { theme } from '../../constants';

const MIN_NUMBER = 1;
const MAX_NUMBER = 99;

const generateRandomNumber = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const randomNumber = Math.floor(Math.random() * (max - min) + min);
  if (randomNumber === exclude) {
    return generateRandomNumber(min, max, exclude);
  } else {
    return randomNumber;
  }
};

const Game = ({ userNumber, onGameOver }) => {
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomNumber(MIN_NUMBER, MAX_NUMBER, userNumber)
  );
  const [rounds, setRounds] = useState(0);

  const currentLow = useRef(MIN_NUMBER);
  const currentHigh = useRef(MAX_NUMBER);

  const onHandlerNextGuess = (direction) => {
    if (
      (direction === 'lower' && currentGuess < userNumber) ||
      (direction === 'greater' && currentGuess > userNumber)
    ) {
      Alert.alert('Hint', 'You know that is wrong!', [{ text: 'Sorry', style: 'cancel' }]);
      return;
    }

    if (direction === 'lower') {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess;
    }
    const nextNumber = generateRandomNumber(currentLow.current, currentHigh.current, currentGuess);
    setCurrentGuess(nextNumber);
    setRounds((currentRound) => currentRound + 1);
  };

  useEffect(() => {
    if (currentGuess === userNumber) onGameOver(rounds);
  }, [currentGuess, userNumber, onGameOver]);
  return (
    <ScrollView style={styles.container}>
      <View style={styles.container}>
        <Card style={styles.content}>
          <Text style={styles.title}>Guess a Number</Text>
          <NumberContainer number={currentGuess} />
          <View style={styles.buttonContainer}>
            <Button
              title="Lower"
              color={theme.colors.secondary}
              onPress={() => onHandlerNextGuess('lower')}
            />
            <Button
              title="Greater"
              color={theme.colors.primary}
              onPress={() => onHandlerNextGuess('greater')}
            />
          </View>
        </Card>
      </View>
    </ScrollView>
  );
};

export default Game;
