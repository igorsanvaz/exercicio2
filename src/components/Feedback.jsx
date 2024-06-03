import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Feedback = ({ score }) => {
  let feedbackText;
  let feedbackStyle;

  if (score <= 10) {
    feedbackText = 'Reflita seus hábitos alimentares, e lembre-se sempre que uma alimentação desregulada pode levar à obesidade, diabetes, hipertensão, problemas no coração, desnutrição, entre outros. Reveja sua dieta alimentar e tente melhorar, seu corpo e sua saúde agradecem.';
    feedbackStyle = styles.bad;
  } else if (score <= 20) {
    feedbackText = 'Sua alimentação está boa, mas ainda não é a ideal. Analise seus hábitos alimentares e verifique o que pode mudar.';
    feedbackStyle = styles.average;
  } else {
    feedbackText = 'Parabéns, você mostrou que sabe cuidar de sua saúde fazendo escolhas inteligentes e equilibradas.';
    feedbackStyle = styles.good;
  }

  return (
    <View style={[styles.container, feedbackStyle]}>
      <Text style={styles.feedbackText}>{feedbackText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  feedbackText: {
    fontSize: 18,
    textAlign: 'center',
  },
  bad: {
    backgroundColor: '#f8d7da',
    borderColor: '#f5c6cb',
  },
  average: {
    backgroundColor: '#fff3cd',
    borderColor: '#ffeeba',
  },
  good: {
    backgroundColor: '#d4edda',
    borderColor: '#c3e6cb',
  },
});

export default Feedback;
