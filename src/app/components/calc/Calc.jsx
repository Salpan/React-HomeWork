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

import { useState } from "react";

const array = [
    {
        label: "0",
        value: 0,
        type: "numeric"
    },
    {
        label: "1",
        value: 1,
        type: "numeric"
    },
    {
        label: "reset",
        value: 'AC',
        type: "numeric"
    },
]

export const Calc = () => {

    const [calc, setCalc] = useState('0')

    const cliclHandler = (value) => {
        if (value !== "AC")
            setCalc((prev => prev + value))
        else {
            setCalc('0')
        }
    }

    return (
        <>
            <p>{calc}</p>
            <input />
            {array.map((number) => {
                return (
                    <button key={number.value} type="button" onClick={() => cliclHandler(number.value)}>
                        {number.label}
                    </button >
                );
            })}

        </>
    )
}
