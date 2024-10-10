const strToNumber = (value) => {
    if (Number.isNaN(Number(value))) {
        throw new Error('Value is not a number(NaN)')
    }

    if (Array.isArray(value)) {
        return value
    }

    if (value === true || value === false) {
        return value
    }

    if (typeof value === 'string' && value.trim().length === 0) {
        return value
    }


    return Number(value)
}

export { strToNumber }