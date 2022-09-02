import './App.css';
import Game from './components/Game';
import React from 'react';

function App() {
  const questions = [
    {
      question: "React JS - это ...",
      answers: ['библиотека', 'фреймворк', 'приложение'],
      correct: 0
    },
    {
      question: "Что такое Компонент?",
      answers: ['состояние', 'приложение', 'функция/класс которая возрощает JSX'],
      correct: 2
    },
    {
      question: "Кто создал библиотеку React?",
      answers: ['Facebook', 'Twitter', 'Google'],
      correct: 0
    },
    {
      question: "useState - это ... ?",
      answers: ['Локальный state', 'Глобальный state'],
      correct: 0
    },
    {
      question: "Как много компонентов может быть на сайте?",
      answers: ['10', '50', 'Неограниченое количество', '200'],
      correct: 2
    }
  ]
  const [step, setStep] = React.useState(0);
  const [result, setResult] = React.useState(0);

  return (
    <div className="App">
      <Game questions ={questions} step={step} setStep={setStep} result = {result} setResult = {setResult}/>
    </div>
  );
}

export default App;
