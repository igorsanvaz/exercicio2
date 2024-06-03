import React, { useContext, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AppContext } from '../context/AppContext';
import Feedback from '../components/Feedback';

const pointsTable = [
  [0, 1, 3], // Questão 1
  [0, 1, 3], // Questão 2
  [0, 2, 3], // Questão 3
  [0, 3, 1], // Questão 4
  [0, 1, 3], // Questão 5
  [0, 2, 3], // Questão 6
  [1, 0, 3], // Questão 7
  [3, 2, 0], // Questão 8
  [0, 3, 1], // Questão 9
  [3, 1, 0]  // Questão 10
];

const ResultScreen = () => {
  const { answers, resetAnswers } = useContext(AppContext);
  
  useEffect(() => {
    return () => resetAnswers();
  }, []);

  const calculateScore = () => {
    let score = 0;
    answers.forEach((answer, index) => {
      score += pointsTable[index][answer - 1];
    });
    return score;
  };

  const score = calculateScore();

  return (
    <View style={styles.container}>
      <Text style={styles.scoreText}>Sua Pontuação: {score}</Text>
      <Feedback score={score} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  scoreText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default ResultScreen;
