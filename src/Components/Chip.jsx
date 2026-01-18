import clsx from 'clsx';
import './Chip.scss';

function Chip({ img, name, classModifier, isLost }) {
  const className = clsx(
    'chip',
    `chip--${classModifier}`,
    isLost && 'chip-lost'
  );

  return (
    <div className={className}>
      <img className="chip-img" src={img} alt="" />
      <span className="chip-name">{name}</span>
    </div>
  );
}

export default Chip;
