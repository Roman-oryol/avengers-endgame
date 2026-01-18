import './Word.scss';

function Word({ children, attempts }) {
  function getAttemptsText(attempts) {
    if (attempts === 1) return 'попытка';
    if (attempts >= 2 && attempts <= 4) return 'попытки';
    return 'попыток';
  }

  return (
    <section className="word">
      <div className="letters">{children} </div>
      <div className="attempts">
        У вас осталось {attempts} {getAttemptsText(attempts)}
      </div>
    </section>
  );
}

export default Word;
