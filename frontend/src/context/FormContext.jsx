import React, { createContext, useState, useContext } from 'react';

const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [answers, setAnswers] = useState({});
  
  const updateAnswer = (field, value) => {
    setAnswers(prev => ({ ...prev, [field]: value }));
  };

  return (
    <FormContext.Provider value={{ answers, updateAnswer }}>
      {children}
    </FormContext.Provider>
  );
};

export const useForm = () => useContext(FormContext);