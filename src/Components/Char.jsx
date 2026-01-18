import clsx from 'clsx';
import './Char.scss';

function Char({ letter, isGuessedLetter }) {
  const className = clsx('letter', !isGuessedLetter && 'letter--missed');

  return <span className={className}>{letter.toUpperCase()}</span>;
}

export default Char;
