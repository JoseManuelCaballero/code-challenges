const minimalDifference = require('../src/minimalDifference');

describe('minimalDifference()', () => {

    it('when the array is empty, it returns 0.', () => {  
        const array = []
        expect(minimalDifference(array)).toEqual(0);
    });

    it('when the array contains only a number, it returns 0.', () => {  
        const array = [1]
        expect(minimalDifference(array)).toEqual(0);
    });

    it('when the array contains the numbers 1 and 2, it returns 1.', () => {  
        const array = [1, 2]
        expect(minimalDifference(array)).toEqual(1);
    });

    it('when the array contains the numbers 1,2 and 3, it returns 0.', () => {  
        const array = [1, 2, 3]
        expect(minimalDifference(array)).toEqual(0);
    });

    it('when the array contains the numbers 1, 2, 3 and 4, it returns 2.', () => {  
        const array = [1, 2, 3, 4]
        expect(minimalDifference(array)).toEqual(2);
    });

    it('when the array contains the numbers 1, 2, 3, 4 and 5, it returns 3.', () => {  
        const array = [1, 2, 3, 4, 5]
        expect(minimalDifference(array)).toEqual(3);
    });

    it('when the array contains the numbers 1, 2, 3, 4, 5 and 6, it returns 1.', () => {  
        const array = [1, 2, 3, 4, 5, 6]
        expect(minimalDifference(array)).toEqual(1);
    });
});

