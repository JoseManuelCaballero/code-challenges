const shortestBalancedFragment = require('../src/shortestBalancedFragment');

describe('shortestBalancedFragment', () => {

    it('when provide an empty string, it should return -1', () => {  
        expect(shortestBalancedFragment("")).toEqual(-1);
    });

    it('when provide an string with only one letter, it should return -1', () => {  
        expect(shortestBalancedFragment("a")).toEqual(-1);
    });

    it('when provide an string with only letters in lower case, it should return -1', () => {    
        expect(shortestBalancedFragment("abcdefghijklmnopqrstuvwxyz")).toEqual(-1);  
    });

    it('when provide an string with only letters in upper case, it should return -1', () => {    
        expect(shortestBalancedFragment("ABCDEF")).toEqual(-1);  
    });
    
    it('when provide the string "azABaabza", it should return 5', () => {  
        expect(shortestBalancedFragment("azABaabza")).toEqual(5);
    });
    
    it('when provide the string "TacoCat", it should return -1', () => {  
        expect(shortestBalancedFragment("TacoCat")).toEqual(-1);
    });
    
    it('when provide the string "AcZCbaBz", it should return 8', () => {  
        expect(shortestBalancedFragment("AcZCbaBz")).toEqual(8);  
    });
        
});


