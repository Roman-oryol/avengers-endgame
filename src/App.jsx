import clsx from 'clsx';
import Confetti from 'react-confetti';
import { useEffect, useRef, useState } from 'react';

import { heroes } from './heroes';

import Status from './Components/Status';
import Chip from './Components/Chip';
import Char from './Components/Char';
import Key from './Components/Key';
import Word from './Components/Word';

import { getRandomWord } from './utils';

import './App.scss';

function App() {
  const [word, setWord] = useState(() => getRandomWord());
  const [guessedLetters, setGuessedLetters] = useState([]);
  const resetGameRef = useRef(null);

  const numGuessesLeft = heroes.length - 1;

  const lastGuessedLetter = guessedLetters[guessedLetters.length - 1];

  const wrongGuessCount = guessedLetters.filter(
    (letter) => !word.split('').includes(letter),
  ).length;

  const isRightGuess = word
    .split('')
    .includes(guessedLetters[guessedLetters.length - 1]);

  const isGameWon = word
    .split('')
    .every((letter) => guessedLetters.includes(letter));

  const isGameLose = wrongGuessCount >= heroes.length - 1;

  const isGameOver = isGameWon || isGameLose;

  const alphabet = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';

  const chipElements = heroes.map((hero, index) => (
    <Chip {...hero} isLost={index < wrongGuessCount} key={hero.name} />
  ));

  const letterElements = word.split('').map((letter, index) => {
    const isGuessedLetter = guessedLetters.includes(letter);
    const showLetter = isGameLose || isGuessedLetter;

    return (
      <Char
        key={index}
        isGuessedLetter={isGuessedLetter}
        letter={showLetter ? letter : ''}
      />
    );
  });

  useEffect(() => {
    resetGameRef.current.focus();
  }, [isGameOver]);

  const keyElements = alphabet
    .split('')
    .map((letter) => (
      <Key
        key={letter}
        onClick={() => addGuessedLetter(letter)}
        letter={letter}
        status={getLetterStatus(letter)}
        isGameOver={isGameOver}
        isClicked={guessedLetters.includes(letter)}
      />
    ));

  function getLetterStatus(letter) {
    if (!guessedLetters.includes(letter)) return null;

    if (word.includes(letter)) return 'correct';

    return 'absent';
  }

  function addGuessedLetter(letter) {
    if (!guessedLetters.includes(letter)) {
      setGuessedLetters((prevLetters) => [...prevLetters, letter]);
    }
  }

  function getGameStatus() {
    if (guessedLetters.length === 0) return null;

    if (isGameWon) return 'victory';

    if (isGameLose) return 'loss';

    if (isRightGuess) return 'default';

    return 'wrongGuess';
  }

  function resetGame() {
    setWord(getRandomWord());
    setGuessedLetters([]);
  }

  return (
    <>
      {isGameWon && <Confetti recycle={false} numberOfPieces={1000} />}

      <main className="container">
        <header className="header">
          <h1 className="title">Мстители: Финальная битва</h1>
          <p className="instructions">
            Угадай слово за 8 попыток, чтобы спасти мир от Таноса!
          </p>
        </header>

        <Status
          gameStatus={getGameStatus()}
          hero={heroes[wrongGuessCount - 1]?.name}
        />

        <section className="chips">{chipElements}</section>

        <Word attempts={heroes.length - 1 - wrongGuessCount}>
          {letterElements}
        </Word>

        <section className="sr-only" aria-live="polite" role="status">
          <p>
            {word.includes(lastGuessedLetter)
              ? `Правильно! Буква ${lastGuessedLetter} присутствует в слове.`
              : `Извините, буква ${lastGuessedLetter} отсутствует в слове.`}
            You have {numGuessesLeft} attempts left.
          </p>
          <p>
            Current word:{' '}
            {word
              .split('')
              .map((letter) =>
                guessedLetters.includes(letter) ? letter + '.' : 'blank.',
              )
              .join(' ')}
          </p>
        </section>

        <section className="keyboard">{keyElements}</section>

        <div className="button-container">
          <button
            className={clsx('reset-button', isGameOver && 'visible')}
            onClick={resetGame}
            disabled={!isGameOver}
            ref={resetGameRef}
          >
            Новая игра
          </button>
        </div>
      </main>
    </>
  );
}

export default App;
