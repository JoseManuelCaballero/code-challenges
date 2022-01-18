const divideString = require('../src/divideString');

describe('divideString', () => {

    it('when do not provide a string return 0', () => {  
        expect(divideString(null)).toEqual(0);
    });

    it('when the string is empty return 0', () => {  
        expect(divideString("")).toEqual(0);
    });

    it('when the string contain only letters "a"', () => {  
        expect(divideString("aaa")).toEqual(3);  
    });

    it('when the string contain only letters "b"', () => {  
        expect(divideString("bbb")).toEqual(3);  
    });

    it('when the string contain only letters "b" combination 2', () => {  
        expect(divideString("bbbbb")).toEqual(6);  
    });

    it('when the string contain 1 letters "a" and 2 letter "b"', () => {  
        expect(divideString("abb")).toEqual(0);  
    });

    it('when the string contain 2 letters "a" and 1 letter "b"', () => {  
        expect(divideString("aba")).toEqual(0);  
    });

    it('when the string contain 2 letters "a" and 2 letter "b"', () => {  
        expect(divideString("aabb")).toEqual(0);  
    });

    it('when the string contain 3 letters "a" and 2 letters "b" combination 1', () => {  
        expect(divideString("babaa")).toEqual(2);
    });
    
    it('when the string contain 3 letters "a" and 2 letters "b" combination 2', () => {  
        expect(divideString("ababa")).toEqual(4);
    });               
    
});

