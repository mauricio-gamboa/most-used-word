import {
    getCount,
    getCleanArray
} from './string';

describe('string service', () => {
    describe('getCleanArray', () => {
        test('remove dots from string', () => {
            const text = 'This is a. test';
            const clean = getCleanArray(text);
            expect(clean[2]).toBe('a');
        });

        test('remove dots from string', () => {
            const text = '.This is a test';
            const clean = getCleanArray(text);
            expect(clean[0]).toBe('This');
        });

        test('remove dots from string', () => {
            const text = 'This is a test.';
            const clean = getCleanArray(text);
            expect(clean[3]).toBe('test');
        });

        test('removes commas from string', () => {
            const text = 'This is a,test';
            const clean = getCleanArray(text);
            expect(clean[2]).toBe('a');
        });

        test('removes commas from string', () => {
            const text = ',This is a test';
            const clean = getCleanArray(text);
            expect(clean[0]).toBe('This');
        });

        test('removes commas from string', () => {
            const text = 'This is a test,';
            const clean = getCleanArray(text);
            expect(clean[3]).toBe('test');
        });

        test('returns an array', () => {
            const text = 'This is a test.';
            const clean = getCleanArray(text);
            expect(Array.isArray(clean)).toBeTruthy();
        });

        test('returns an array', () => {
            const text = 'This is a test.';
            const clean = getCleanArray(text);
            expect(clean.length).toBe(4);
        });
    });

    describe('getCount', () => {
        test('returns a counter object', () => {
            const arr = ['this', 'is', 'a', 'test'];
            const countObj = getCount(arr);
            expect(countObj).toEqual({
                a: 1,
                is: 1,
                test: 1,
                this: 1
            });
        });

        test('returns a counter object', () => {
            const arr = ['this', 'test', 'a', 'test'];
            const countObj = getCount(arr);
            expect(countObj).toEqual({
                test: 2
            });
        });

        test('returns a counter object', () => {
            const arr = ['this', 'test', 'this', 'test', 'a'];
            const countObj = getCount(arr);
            expect(countObj).toEqual({
                test: 2,
                this: 2
            });
        });
    });
});