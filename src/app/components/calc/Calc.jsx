/**
 * Задание: Написать калькулятор
 * 1) Калькулятор должен содержать 10 кнопок с цифрами от 0 до 9.
 * 2) Добавить кнопки сложения, вычитания, умножения, деления.
 * 3) Добавить кнопки равенства, сброса.
 * 4) Кнопки должны отрисовываться динамически, на основе массива.
 * 5) Добавить input, в который будет выводиться промежуточное значение.
 */

// Example: https://github.com/shut56/chat/blob/master/client/components/common/message-input.js

// [
//     {
//         label: "0",
//         value: 0,
//         type: "numeric",
//     },
//     {
//         label: "=",
//         value: null,
//         type: "functionality",
//     },
// ];

// Получение значения инпута:
//
// const onChangeHandler = (e) => {
//     setInputValue(e.target.value)
// }
//
// <input onChange={onChangeHandler} />

import { useCallback, useMemo, useState } from 'react';
import { arrayCalc } from './consts';
import './styles.css';

export const Calc = () => {
    const [prev, setPrev] = useState('0');
    const [curr, setCurr] = useState('0');
    const [operator, setOperator] = useState(null);
    const [total, setTotal] = useState(false);

    const onChangeHandler = useCallback((e) => {
        setCurr(e.target.value);
    }, []);

    const addNewDigit = useCallback(
        (value) => {
            if (total) {
                setPrev('0');
            }

            if (curr && curr !== '0') {
                setCurr((prevValue) => {
                    if (operator && prev === curr) {
                        return String(value);
                    }

                    return String(prevValue) + String(value);
                });
                setTotal(false);
            } else {
                setCurr(String(value));
            }

            setTotal(false);
        },
        [curr, prev, total, operator],
    );

    const equals = useCallback(
        (label) => {
            if (label === '=') {
                setTotal(true);
            }

            let calculatedValue = 0;

            switch (operator) {
                case '/':
                    calculatedValue = parseInt(prev) / parseInt(curr);
                    break;
                case '*':
                    calculatedValue = parseInt(prev) * parseInt(curr);
                    break;
                case '+':
                    calculatedValue = parseInt(prev) + parseInt(curr);
                    break;
                case '-':
                    calculatedValue = parseInt(prev) - parseInt(curr);
                    break;
                default:
                    return;
            }

            setPrev(calculatedValue);
            setCurr(calculatedValue);
        },
        [curr, operator, prev],
    );

    const operators = useCallback(
        (label) => {
            setTotal(false);
            setOperator(label);

            if (!curr) {
                return;
            }

            if (prev !== '0') {
                equals(label);
            } else {
                setPrev(curr);
            }
        },
        [curr, prev, equals],
    );

    const reset = useCallback(() => {
        setPrev('0');
        setCurr('0');
    }, []);

    const onClickHandler = useCallback(
        (item) => {
            return () => {
                switch (item.type) {
                    case 'function': {
                        operators(item.label);
                        break;
                    }
                    case 'numeric': {
                        addNewDigit(item.value);
                        break;
                    }
                    case 'equal': {
                        equals(item.label);
                        break;
                    }
                    default: {
                        reset();
                    }
                }
            };
        },
        [operators, addNewDigit, equals, reset],
    );

    const buttonClassName = useMemo(
        () => (type) => {
            switch (type) {
                case 'reset': {
                    return 'reset-button';
                }
                case 'function': {
                    return 'function-button';
                }
                case 'equal': {
                    return 'equal-button';
                }
                default: {
                    return 'num-button';
                }
            }
        },
        [],
    );

    return (
        <div className="container">
            <div className="calc-wrapper">
                <div className="calc">
                    <div className="input">
                        {curr !== '' || curr === '0' ? curr : prev}
                    </div>
                    <div>Prev: {prev}</div>
                    <div>Curr: {curr}</div>
                    <input
                        type="number"
                        value={curr}
                        onChange={onChangeHandler}
                        className="input"
                    />
                    <div className="calc-buttons">
                        {arrayCalc.map((item, index) => {
                            return (
                                <button
                                    key={index}
                                    className={`base-button ${buttonClassName(item.type)}`}
                                    type="button"
                                    onClick={onClickHandler(item)}
                                >
                                    {item.label}
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};
