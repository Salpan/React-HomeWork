import { useCallback, useState } from 'react';

import './styles.css';

export const Counter = () => {
  const [count, setCount] = useState(0);

  const inc = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  /**
   * HomeWork:
   * 1) Значение каунтера не должно быть отрицательным.
   * 2) Добавить кнопку обнуления каунтера.
   * 3) Добавить кнопки изменения значения на +10 и -10.
   * 4) При достижении значения больше 50, кнопка "Больше" должна заблокироваться.
   * 5) Значение каунтера не должно никогда превышать 50.
   */

  const dec = useCallback(() => {
    setCount((prev) => prev - 1);
  }, []);

  return (
    <div className="counter">
      <button type="button" onClick={dec}>
        Less
      </button>
      <div className="count">{count}</div>
      <button type="button" onClick={inc}>
        More
      </button>
    </div>
  );
};
