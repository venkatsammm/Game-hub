import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';

export default function RockPaperScissors({ onBack }) {
  const choices = ['Rock', 'Paper', 'Scissors'];
  const [result, setResult] = useState('');

  function play(choice) {
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    if (choice === computerChoice) setResult('It\'s a draw!');
    else if ((choice === 'Rock' && computerChoice === 'Scissors') ||
             (choice === 'Scissors' && computerChoice === 'Paper') ||
             (choice === 'Paper' && computerChoice === 'Rock')) {
      setResult('You Win!');
    } else {
      setResult('You Lose!');
    }
    Alert.alert(`You chose ${choice}, Computer chose ${computerChoice}`, result);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rock Paper Scissors ✊✋✌️</Text>
      {choices.map(choice => <Button key={choice} title={choice} onPress={() => play(choice)} />)}
      <Button title="Back to Menu" onPress={onBack} color="#ff0000" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 20 }
});
