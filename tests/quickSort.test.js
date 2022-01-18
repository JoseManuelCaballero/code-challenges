const quickSort = require('../src/quickSort');

describe('quickSort()', () => {

    it('when the array no contain any number return array empty', () => {  
        expect(quickSort([])).toEqual([]);
    });
    
    it('when the array contain only one number return array with the same number', () => {  
        expect(quickSort([1])).toEqual([1]);
    });

    it('when the array contain 2 numbers return array with the same numbers ordened', () => {  
        expect(quickSort([2,1])).toEqual([1,2]);
    });

    it('when the array contain 3 numbers return array with the same numbers ordened', () => {  
        expect(quickSort([2,1,3])).toEqual([1,2,3]);
    });

    it('when the array contain 4 numbers return array with the same numbers ordened', () => {  
        expect(quickSort([2,4,1,3])).toEqual([1,2,3,4]);
    });

    it('when the array contain 5 numbers return array with the same numbers ordened', () => {  
        expect(quickSort([2,4,1,5,3])).toEqual([1,2,3,4,5]);
    });

    it('when the array contain 6 numbers return array with the same numbers ordened', () => {  
        expect(quickSort([3,6,8,4,3,1])).toEqual([1,3,3,4,6,8]);
    });

    it('when the array contain 7 numbers return array with the same numbers ordened', () => {  
        expect(quickSort([2,4,9,7,8,3,1])).toEqual([1,2,3,4,7,8,9]);
    });
    
    
    
});

