const strToNumber = (value) => {
    if (Number.isNaN(Number(value))) {
        return value;
    }

    if (value === true || value === false) {
        return value;
    }

    if (typeof value === 'string' && value.trim().length === 0) {
        return value;
    }

    if (Array.isArray(value)) {
        throw new Error('Value is not a number, but an array');
    }

    return Number(value);
};

export { strToNumber };
