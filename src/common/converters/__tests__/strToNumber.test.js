import { strToNumber } from '../strToNumber';

const testCases = [
    {
        input: true,
        result: true,
    },
    {
        input: false,
        result: false,
    },
    {
        input: '0',
        result: 0,
    },
    {
        input: '',
        result: '',
    },
    {
        input: ' ',
        result: ' ',
    },
    {
        input: 'some-text',
        result: 'some-text',
    },
];

describe('strToNumber', () => {
    testCases.forEach(({ input, result }) => {
        test(`Given ${input} value. Should return ${result}`, () => {
            expect(strToNumber(input)).toBe(result);
        });
    });

    test('Given blank array. Should return error', () => {
        expect(() => strToNumber([])).toThrow(
            'Value is not a number, but an array',
        );
    });

    test('Given array [1,2,3]. Should return array [1,2,3]', () => {
        expect(strToNumber([1, 2, 3])).toStrictEqual([1, 2, 3]);
    });

    test('Given object. Should return object', () => {
        expect(strToNumber({})).toStrictEqual({});
    });
});
