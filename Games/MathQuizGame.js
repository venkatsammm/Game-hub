import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

export default function MathQuizGame({ onBack }) {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [operation, setOperation] = useState('+');
  const [answer, setAnswer] = useState('');
  const [score, setScore] = useState(0);

  useEffect(() => {
    generateQuestion();
  }, []);

  function generateQuestion() {
    const n1 = Math.floor(Math.random() * 20) + 1;
    const n2 = Math.floor(Math.random() * 20) + 1;
    const operations = ['+', '-', '×'];
    const op = operations[Math.floor(Math.random() * operations.length)];

    setNum1(n1);
    setNum2(n2);
    setOperation(op);
    setAnswer('');
  }

  function checkAnswer() {
    let correctAnswer;
    switch (operation) {
      case '+': correctAnswer = num1 + num2; break;
      case '-': correctAnswer = num1 - num2; break;
      case '×': correctAnswer = num1 * num2; break;
    }

    if (parseInt(answer) === correctAnswer) {
      setScore(score + 1);
      Alert.alert('Correct!', 'Well done!', [{ text: 'Next', onPress: generateQuestion }]);
    } else {
      Alert.alert('Wrong!', 'Try again!', [{ text: 'Retry' }]);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Math Quiz Game 🔢</Text>
      <Text style={styles.score}>Score: {score}</Text>
      <Text style={styles.question}>{num1} {operation} {num2} = ?</Text>
      <TextInput style={styles.input} keyboardType="numeric" value={answer} onChangeText={setAnswer} />
      <Button title="Submit Answer" onPress={checkAnswer} color="#28a745" />
      <Button title="Back to Menu" onPress={onBack} color="#ff0000" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 20 },
  score: { fontSize: 20, marginBottom: 20 },
  question: { fontSize: 26, fontWeight: 'bold', marginBottom: 15 },
  input: { width: 100, height: 50, borderColor: 'black', borderWidth: 2, textAlign: 'center', fontSize: 22, marginBottom: 20 }
});
