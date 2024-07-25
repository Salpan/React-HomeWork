import { useCallback, useLayoutEffect, useState } from "react";

import "./styles.css";

export const Counter = () => {
    const [count, setCount] = useState(0);
    const [isDisabledInc, setIsDisabledInc] = useState(false);
    const [isDisabledDec, setIsDisabledDec] = useState(false);

    const inc = useCallback(() => {
        setCount((prev) => {
            if (prev >= 49) {
                return 50;
            }

            return prev + 1;
        });
    }, []);

    const minusTen = useCallback(() => {
        setCount((prev) => {
            if (prev <= 10) {
                return 0;
            }

            return prev - 10;
        });
    }, []);

    const plusTen = useCallback(() => {
        setCount((prev) => {
            if (prev >= 40) {
                return 50;
            }

            return prev + 10;
        });
    }, []);

    const dec = useCallback(() => {
        setCount((prev) => {
            if (prev === 0) {
                return 0;
            }

            return prev - 1;
        });
    }, []);

    const reset = useCallback(() => {
        setCount(0);
    }, []);

    useLayoutEffect(() => {
        setIsDisabledDec(count <= 0);
        setIsDisabledInc(count >= 50);
    }, [count]);

    return (
        <div className="counter-wrapper">
            <div className="counter">
                <button
                    className="counter-button"
                    type="button"
                    onClick={minusTen}
                    disabled={isDisabledDec}
                >
                    -10
                </button>
                <button className="counter-button" type="button" onClick={dec} disabled={isDisabledDec}>
                    -1
                </button>
                <div className="count">{count}</div>
                <button className="counter-button" type="button" onClick={inc} disabled={isDisabledInc}>
                    +1
                </button>
                <button
                    className="counter-button"
                    type="button"
                    onClick={plusTen}
                    disabled={isDisabledInc}
                >
                    +10
                </button>
            </div>
            <button
                className="reset"
                type="button"
                onClick={reset}
                disabled={isDisabledDec}
            >
                0
            </button>
        </div>
    );
};
