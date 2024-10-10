import { strToNumber } from "../strToNumber";

const testCases = [
    {
        input: '0',
        result: 0
    },
    {
        input: true,
        result: true
    },
    {
        input: '',
        result: ''
    },
    {
        input: ' ',
        result: ' '
    },
    {
        input: [],
        result: []
    },
]

const errorCases = [
    {
        input: 'some text',
        result: NaN,
        error: 'Value is not a number'
    },
    {
        input: [1, 2, 3],
        result: NaN,
        error: 'Value is not a number'
    },
    {
        input: {},
        result: NaN,
        error: 'Value is not a number'
    },
]

describe('strToNumber', () => {

    errorCases.forEach(({ input, result, error }) => {
        test(`Number.(${input}) is ${result}.`, () => {
            expect(() => strToNumber(input)).toThrow(error)
        })
    })

    testCases.forEach(({ input, result }) => {
        test(`Given ${input} value. Should returt ${result}`, () => {
            expect(strToNumber(input)).toEqual(result)
        })
    })
})