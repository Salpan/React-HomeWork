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

import { useEffect, useState } from "react";
import { arrayCalc } from "./consts/data";
import "./styles.css";

export const Calc = () => {
    const [prev, setPrev] = useState("");
    const [curr, setCurr] = useState("");
    const [input, setInput] = useState("");
    const [operator, setOperator] = useState(null);
    const [total, setTotal] = useState(false);
    // const [inputValue, setInputValue] = useState('')

    // const onChangeHandler = (e) => {
    //     setInputValue(e.target.value)
    // }

    const numbers = (label) => {
        if (total) {
            setPrev("");
        }
        curr ? setCurr((prev) => prev + label) : setCurr(label);
        setTotal(false);
    };

    useEffect(() => {
        setInput(curr);
    }, [curr]);

    const operators = (label) => {
        setTotal(false);
        setOperator(label);
        if (curr === "") return true;
        else {
            if (prev !== "") {
                equals();
            } else {
                setPrev(curr);
                setCurr("");
            }
        }
    };

    const equals = (label) => {
        if (label === "=") {
            setTotal(true);
        }

        let cal = 0;
        switch (operator) {
            case "/":
                cal = parseInt(prev) / parseInt(curr);
                break;
            case "*":
                cal = parseInt(prev) * parseInt(curr);
                break;
            case "+":
                cal = parseInt(prev) + parseInt(curr);
                break;
            case "-":
                cal = parseInt(prev) - parseInt(curr);
                break;
            default:
                return true;
        }
        setInput("");
        setPrev(cal);
        setCurr("");
    };

    const reset = () => {
        setPrev("");
        setCurr("");
        setInput("0");
    };

    return (
        <div className="container">
            <div className="calc">
                <div className="input">
                    {input !== "" || input === "0" ? input : prev}
                </div>
                {/* <input onChange={onChangeHandler} /> */}
                <div className="calc-buttons">
                    {arrayCalc.map((item, index) => {
                        return (
                            <button
                                key={index}
                                className={
                                    item.type === "reset"
                                        ? "reset-button"
                                        : item.type === "function"
                                          ? "function-button"
                                          : item.type === "equal"
                                            ? "equal-button"
                                            : "num-button"
                                }
                                type="button"
                                onClick={() => {
                                    if (item.type === "function") {
                                        operators(item.label);
                                    } else if (item.type === "numeric") {
                                        numbers(item.label);
                                    } else if (item.type === "equal") {
                                        equals(item.label);
                                    } else reset();
                                }}
                            >
                                {item.label}
                            </button>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};
