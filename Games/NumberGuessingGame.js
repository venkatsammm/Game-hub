import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

export default function NumberGuessingGame({ onBack }) {
  const [targetNumber, setTargetNumber] = useState(generateRandomNumber());
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('Guess a number between 1 and 100');

  function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
  }

  function checkGuess() {
    const num = parseInt(guess);
    if (isNaN(num)) {
      Alert.alert('Invalid Input', 'Please enter a valid number!');
      return;
    }
    if (num > targetNumber) {
      setMessage('Too high! Try again.');
    } else if (num < targetNumber) {
      setMessage('Too low! Try again.');
    } else {
      Alert.alert('Congratulations!', 'You guessed the correct number! 🎉', [
        { text: 'Play Again', onPress: resetGame }
      ]);
    }
    setGuess('');
  }

  function resetGame() {
    setTargetNumber(generateRandomNumber());
    setMessage('Guess a number between 1 and 100');
    setGuess('');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Number Guessing Game 🔢</Text>
      <Text style={styles.message}>{message}</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={guess}
        onChangeText={setGuess}
        placeholder="Enter your guess"
      />
      <Button title="Submit Guess" onPress={checkGuess} color="#28a745" />
      <Button title="Back to Menu" onPress={onBack} color="#ff0000" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 20 },
  message: { fontSize: 20, marginBottom: 10 },
  input: {
    width: 100, height: 50, borderColor: 'black',
    borderWidth: 2, textAlign: 'center', fontSize: 22,
    marginBottom: 20
  }
});
