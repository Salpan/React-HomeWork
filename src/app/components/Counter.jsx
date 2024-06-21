import { useCallback, useState } from 'react';

import './styles.css';

/**
 * HomeWork:
 * 1) Значение каунтера не должно быть отрицательным.
 * 2) Добавить кнопку обнуления каунтера.
 * 3) Добавить кнопки изменения значения на +10 и -10.
 * 4) При достижении значения больше 50, кнопка "Больше" должна заблокироваться.
 * 5) Значение каунтера не должно никогда превышать 50.
 */

export const Counter = () => {
  const [count, setCount] = useState(0);

  const inc = useCallback(() => {
    setCount((prev) => {
      if (prev >= 49) return prev = 50
      else {
        return prev + 1
      }
    });
  }, []);

  const minusTen = useCallback(() => {
    setCount((prev) => {
      if (prev <= 10) return prev = 0
      else {
        return prev - 10
      }
    });
  }, []);

  const plusTen = useCallback(() => {
    setCount((prev) => {
      if (prev >= 40) return prev = 50
      else {
        return prev + 10
      }
    });
  }, []);

  const dec = useCallback(() => {
    setCount((prev) => {
      if (prev === 0) return prev = 0
      else {
        return prev - 1
      }
    });
  }, []);

  const reset = useCallback(() => {
    setCount(0)
  })

  return (
    <div className="counter">
      <button type="button" onClick={minusTen}>
        -10
      </button>
      <button type="button" onClick={dec}>
        -1
      </button>
      <div className="count">{count}</div>
      <button type="button" onClick={inc}>
        +1
      </button>
      <button type="button" onClick={plusTen}>
        +10
      </button>
      <button className="reset" type="button" onClick={reset}>
        0
      </button>
    </div>
  );
};
