import React, { useContext, useEffect } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { AppContext } from '../context/AppContext';
import Feedback from '../components/Feedback';
import axios from 'axios';

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

  const handleSave = async () => {
    try {
      const response = await axios.post('http://192.168.0.66:9082/questionario', {
        q1: answers[0],
        q2: answers[1],
        q3: answers[2],
        q4: answers[3],
        q5: answers[4],
        q6: answers[5],
        q7: answers[6],
        q8: answers[7],
        q9: answers[8],
        q10: answers[9],
      }, {
        timeout: 50000 // 20 segundos
      });
      console.log('Dados salvos:', response.data);
    } catch (error) {
      console.error('Erro ao salvar os dados:', error);
    }
  };

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
      <Button
        title='Gravar questões'
        onPress={handleSave}
      />
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
