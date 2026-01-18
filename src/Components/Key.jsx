import clsx from 'clsx';
import './Key.scss';

function Key({ onClick, letter, status, isGameOver, isClicked }) {
  const className = clsx('key-button', {
    'key-button--correct': status === 'correct',
    'key-button--absent': status === 'absent',
  });

  return (
    <button
      className={className}
      onClick={onClick}
      disabled={isGameOver || isClicked}
      aria-disabled={isGameOver || isClicked}
      aria-label={`Letter ${letter}`}
    >
      {letter.toUpperCase()}
    </button>
  );
}

export default Key;
