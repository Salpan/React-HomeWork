
import { useCallback, useEffect, useMemo, useState } from 'react';
import { arrayCalc } from './consts';
import './styles.css';

export const Calc = () => {
    const [prev, setPrev] = useState('0');
    const [curr, setCurr] = useState('0');
    const [operator, setOperator] = useState(null);
    const [total, setTotal] = useState(false);
    const [errorText, setErrorText] = useState('');

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
                case '=': {
                    calculatedValue = curr;
                    break;
                }
                default:
                    return;
            }

            setPrev(String(calculatedValue));
            setCurr(String(calculatedValue));
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

            if (prev !== '0' && curr !== prev) {
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
        setOperator(null);
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

    useEffect(() => {
        const max = Number.MAX_SAFE_INTEGER;
        if (prev >= max || curr >= max) {
            setErrorText('More then safe integer');
        } else {
            setErrorText('');
        }
    }, [prev, curr]);

    return (
        <div className="container">
            <div className="calc-wrapper">
                <div className="calc">
                    <div className="operation-view">
                        {prev !== '0' && <span>{prev}</span>}
                        {operator && <span> {operator}</span>}
                    </div>
                    <input
                        type="number"
                        value={curr}
                        onChange={onChangeHandler}
                        className="input"
                    />
                    {errorText && (
                        <span style={{ color: 'red' }}>{errorText}</span>
                    )}
                    <div className="calc-buttons">
                        {arrayCalc.map((item, index) => {
                            return (
                                <button
                                    key={index}
                                    className={`base-button ${buttonClassName(item.type)}`}
                                    type="button"
                                    onClick={onClickHandler(item)}
                                    disabled={
                                        item.type !== 'reset' && errorText
                                    }
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
