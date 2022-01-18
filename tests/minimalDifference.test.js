const minimalDifference = require('../src/minimalDifference');

describe('minimalDifference()', () => {

    it('when the array no contain numbers', () => {  
        const array = []
        expect(minimalDifference(array)).toEqual(0);
    });

    it('when the array contain only one number', () => {  
        const array = [1]
        expect(minimalDifference(array)).toEqual(0);
    });

    it('when the array contain the numbers from 1 to 2', () => {  
        const array = [1, 2]
        expect(minimalDifference(array)).toEqual(1);
    });

    it('when the array contain the numbers from 1 to 3', () => {  
        const array = [1, 2, 3]
        expect(minimalDifference(array)).toEqual(0);
    });

    it('when the array contain the numbers from 1 to 4', () => {  
        const array = [1, 2, 3, 4]
        expect(minimalDifference(array)).toEqual(2);
    });

    it('when the array contain the numbers from 1 to 5', () => {  
        const array = [1, 2, 3, 4, 5]
        expect(minimalDifference(array)).toEqual(3);
    });

    it('when the array contain the numbers from 1 to 6', () => {  
        const array = [1, 2, 3, 4, 5, 6]
        expect(minimalDifference(array)).toEqual(1);
    });
});

