import React, { useState } from 'react';
import { AppContext } from './AppContext';

export const AppProvider = ({ children }) => {
  const [answers, setAnswers] = useState([]);

  const addAnswer = (answer) => {
    setAnswers([...answers, answer]);
  };

  const resetAnswers = () => {
    setAnswers([]);
  };

  return (
    <AppContext.Provider value={{ answers, addAnswer, resetAnswers }}>
      {children}
    </AppContext.Provider>
  );
};
