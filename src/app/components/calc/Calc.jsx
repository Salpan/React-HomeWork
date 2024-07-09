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
import { arrayCalc } from "./data"

// eval(arr.reduce((acc, item) => {
//     acc = acc + item
//     return acc
// }))

export const Calc = () => {

    // const [calc, setCalc] = useState('')
    const [outPut, setOutPut] = useState('')


    const cliclHandler = (value, label) => {
        // setCalc(prev => prev + value)

        if (value === "AC")
            setOutPut('')
        else if (value === '=') {
            // setOutPut(eval(JSON.parse(JSON.stringify(outPut))))
            setOutPut('')
        } else setOutPut((prev => prev + label))
    }

    return (
        <>
            <p>{outPut}</p>
            <input />
            {arrayCalc.map((item) => {
                return (
                    <button key={item.value} type="button" onClick={
                        () => cliclHandler(item.value, item.label)}>
                        {item.label}
                    </button >
                );
            })}
        </>
    )
}
