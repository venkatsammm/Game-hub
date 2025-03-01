import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Button, StyleSheet } from 'react-native';

export default function CounterTapGame({ onBack }) {
  const [count, setCount] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    if (timeLeft > 0 && !gameOver) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setGameOver(true);
    }
  }, [timeLeft, gameOver]);

  function handleTap() {
    if (!gameOver) setCount(count + 1);
  }

  function restartGame() {
    setCount(0);
    setTimeLeft(10);
    setGameOver(false);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Counter Tap Game 👆</Text>
      <Text style={styles.timer}>Time Left: {timeLeft} seconds</Text>
      <Text style={styles.score}>Score: {count} taps</Text>
      {!gameOver ? (
        <TouchableOpacity style={styles.tapArea} onPress={handleTap}>
          <Text style={styles.tapText}>TAP ME!</Text>
        </TouchableOpacity>
      ) : (
        <Text style={styles.finalScore}>Final Score: {count} taps</Text>
      )}
      <Button title="Restart Game" onPress={restartGame} color="#28a745" />
      <Button title="Back to Menu" onPress={onBack} color="#ff0000" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 20 },
  timer: { fontSize: 22, marginBottom: 10 },
  score: { fontSize: 22, marginBottom: 20 },
  finalScore: { fontSize: 26, fontWeight: 'bold', color: '#d9534f', marginBottom: 20 },
  tapArea: {
    width: 200, height: 200, backgroundColor: '#007bff',
    justifyContent: 'center', alignItems: 'center',
    borderRadius: 100, marginBottom: 20
  },
  tapText: { fontSize: 24, fontWeight: 'bold', color: 'white' }
});
