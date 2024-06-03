import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { AppContext } from '../context/AppContext';
import Question from '../components/Question';

const questions = [
  {
    id: 1,
    question: 'Quantos copos de água você bebe por dia?',
    options: ['Não bebo muita água', 'Menos de quatro copos', 'Mais de cinco copos'],
    image: require('../images/agua.webp')
  },
  {
    id: 2,
    question: 'Quantas vezes por dia você come? (conte também os lanches da manhã e da tarde)',
    options: ['Uma ou duas vezes por dia', 'De três a quatro vezes por dia', 'Mais de cinco vezes por dia'],
    image: require('../images/comer.png')
  },
  {
    id: 3,
    question: 'Como costuma ser seu café da manhã?',
    options: ['Café preto e no máximo um biscoitinho', 'Café com leite, pão branco, margarina, queijo e presunto', 'Frutas e sucos naturais, cereais integrais, tapioca, pão integral'],
    image: require('../images/cafe.webp')
  },
  {
    id: 4,
    question: 'Qual é, em média, a quantidade de frutas que você consome por dia?',
    options: ['Não como frutas nem bebo suco natural de frutas todos os dias', 'Três unidades', 'Duas ou menos unidades'],
    image: require('../images/frutas.webp')
  },
  {
    id: 5,
    question: 'O que você leva de lanche para a escola/trabalho?',
    options: ['Não levo nenhum tipo de lanche', 'Chocolates, pães, bolachas recheadas, salgadinhos, refrigerante', 'Frutas, iogurte, barrinha de cereal, sanduíche de pão integral'],
    image: require('../images/lanche.jpg')
  },
  {
    id: 6,
    question: 'Você consome algum tipo de verdura ou legume todos os dias?',
    options: ['Não consumo verdura nem legumes', 'Duas ou menos vezes por semana', 'Todos os dias'],
    image: require('../images/verdura.jpg')
  },
  {
    id: 7,
    question: 'Quantas vezes por semana você come carne vermelha?',
    options: ['Todos os dias', 'Não consumo carne vermelha', 'Duas vezes ou mais'],
    image: require('../images/carne.jpg')
  },
  {
    id: 8,
    question: 'Quantas vezes por semana você pratica atividades físicas?',
    options: ['Todos os dias', 'Duas vezes ou mais', 'Não pratico nenhuma atividade física'],
    image: require('../images/atividadeF.jpeg')
  },
  {
    id: 9,
    question: 'Qual tipo de gordura é mais utilizado na sua casa para cozinhar os alimentos?',
    options: ['Gordura animal ou manteiga', 'Óleos vegetais (óleo de soja, girassol, algodão, canola)', 'Margarina ou gordura vegetal'],
    image: require('../images/gordura.png')
  },
  {
    id: 10,
    question: 'Você costuma tomar refrigerantes com qual frequência?',
    options: ['Não tomo refrigerantes', 'Três ou menos vezes por semana', 'Todos os dias'],
    image: require('../images/refrigerante.jpg')
  }
];

const QuestionScreen = ({ route, navigation }) => {
  const { questionNumber } = route.params;
  const { addAnswer } = useContext(AppContext);
  const question = questions[questionNumber - 1];

  const handleAnswer = (answer) => {
    addAnswer(answer);
    if (questionNumber < questions.length) {
      navigation.navigate('Question', { questionNumber: questionNumber + 1 });
    } else {
      navigation.navigate('Result');
    }
  };

  return (
    <View style={styles.container}>
      <Question question={question} onAnswer={handleAnswer} />
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
});

export default QuestionScreen;
