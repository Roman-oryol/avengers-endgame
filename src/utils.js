import { words } from './words';

export function getFarewellText(hero) {
  const options = [
    `Мы в сердце, ${hero}`,
    `Любим и помним, ${hero}`,
    `Спасибо за подвиги, ${hero}`,
    `Твой жертвенный путь не забыт, ${hero}`,
    `Мститель, приём завершён, ${hero}`,
    `Ты всегда с нами, ${hero}`,
    `Легенда не умирает, ${hero}`,
    `Миссия выполнена, ${hero}`,
    `${hero}, мы справимся за тебя`,
    `Ты отдал всё ради нас, ${hero}`,
    `Прощай, герой, ${hero}`,
    `${hero} пал, но не забыт`,
    `Твоя битва окончена, ${hero}`,
    `Мы продолжим твоё дело, ${hero}`,
    `${hero}, ты всегда в строю Мстителей`,
  ];

  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}

export function getRandomWord() {
  const randomIndex = Math.floor(Math.random() * words.length - 1);
  return words[randomIndex];
}
