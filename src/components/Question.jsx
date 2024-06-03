import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const optionLetters = ['a)', 'b)', 'c)'];

const Question = ({ question, onAnswer }) => {
  return (
    <View style={styles.container}>
      <Image source={question.image} style={styles.image} />
      <Text style={styles.questionText}>{`${question.id}. ${question.question}`}</Text>
      {question.options.map((option, index) => (
        <TouchableOpacity
          key={index}
          style={styles.button}
          onPress={() => onAnswer(index + 1)}
        >
          <Text style={styles.buttonText}>{`${optionLetters[index]} ${option}`}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
    alignItems: 'center',
  },
  questionText: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'center',
  },
  image: {
    width: 300,
    height: 200,
    marginBottom: 20,
    borderRadius: 10,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    width: '100%',
    maxWidth: 300,
    marginVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default Question;
