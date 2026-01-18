import { clsx } from 'clsx';
import { getFarewellText } from '../utils';
import './Status.scss';

function Status({ gameStatus, hero }) {
  const config = {
    victory: {
      title: 'Победа!',
      subtitle: '🎉Отличная работа!🎉',
    },
    loss: {
      title: 'Вы проиграли!',
      subtitle: 'Мстители пали и Танос щелкнул пальцами😥',
    },
    wrongGuess: {
      title: getFarewellText(hero),
    },
  };

  const { title = '', subtitle = '' } = config[gameStatus] || {};

  const className = clsx('status', {
    'status--win': gameStatus === 'victory',
    'status--lose': gameStatus === 'loss',
    'status--wrong-guess': gameStatus === 'wrongGuess',
    // 'status--default': gameStatus === 'default',
  });

  return (
    <section className={className} aria-live="polite" role="status">
      <h2 className="status-title">{title}</h2>
      <p className="status-subtitle">{subtitle}</p>
    </section>
  );
}

export default Status;
