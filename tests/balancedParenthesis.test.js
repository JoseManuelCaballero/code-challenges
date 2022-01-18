const balancedParenthesis = require('../src/balancedParenthesis');

describe('balancedParenthesis()', () => {
    it('when you do not provide a string, it should return false', () =>{
        expect(balancedParenthesis(null)).toEqual(false);
    });

    it('when you provide a string empty, it should return true', () =>{
        expect(balancedParenthesis("")).toEqual(true);
    });

    it('when you provide a string with no parentheses, no braces, and no brackets, it should return true', () =>{
        expect(balancedParenthesis("hola mundo")).toEqual(true);
    });
    
    it('when you provide a string with only one open brace, it should return false', () =>{
        expect(balancedParenthesis("{")).toEqual(false);
    });

    it('when you provide a string with only one open parenthesis, it should return false', () =>{
        expect(balancedParenthesis("(")).toEqual(false);
    });
    
    it('when you provide a string with only one open brackets, it should return false', () =>{
        expect(balancedParenthesis("[")).toEqual(false);
    });

    it('when you provide a string with open and closed braces correctly, it should return true', () =>{
        expect(balancedParenthesis("{}")).toEqual(true);
    });    

    it('when you provide a string with open and closed parenthesis correctly, it should return true', () =>{
        expect(balancedParenthesis("()")).toEqual(true);
    });    

    it('when you provide a string with open and closed brackets correctly, it should return true', () =>{
        expect(balancedParenthesis("[]")).toEqual(true);
    });    

    it('when you provide a string with open and closed brackets correctly and with open and closed braces correctly, it should return true', () => {    
        expect(balancedParenthesis("[{}]")).toEqual(true);  
    });    

    it('when you provide a string with open and closed brackets correclty and with open and closed parenthesis correctly, it should return true', () => {    
        expect(balancedParenthesis("[()]")).toEqual(true);  
    });

    it('when you provide a string with open and closed braces correctly and with open and closed parenthesis correctly, it should return true', () => {    
        expect(balancedParenthesis("{()}")).toEqual(true);  
    });
    
    it('when you provide a string with open and closed brackets correctly, with open and closed braces correctly and with open and closed parenthesis correctly, it should return true', () => {    
        expect(balancedParenthesis("[{()}]")).toEqual(true);
    });
    
    it('when you provide a string with open and closed braces correctly, with open and closed parenthesis correctly and with open and closed brackets correctly, it should return true', () => {  
        expect(balancedParenthesis("{([])}")).toEqual(true);
    });
    
    it('when you provide a string with open and closed parenthesis correctly, with open and closed brackets correctly and with open and closed braces correctly, it should return true', () => {  
        expect(balancedParenthesis("([{}])")).toEqual(true);  
    });        
    
    it('when you provide a string with open and closed parenthesis correctly, with open and closed brackets incorrectly and with open and closed braces incorrectly, it should return false', () => {
        expect(balancedParenthesis("([{]})")).toEqual(false);  
    });
    
    it('when you provide a string with open and closed braces incorrectly, with only open bracket and with only closed parenthesis, it should return false', () => {    
        expect(balancedParenthesis("{[})")).toEqual(false);  
    });
    
})

