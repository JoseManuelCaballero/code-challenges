const anagram = require('../src/anagram');

test('run anagram with array 1', () => {  
    const array = ["Ave","Eva","Va","Vea"]
    expect(anagram(array)).toEqual(["Eva","Vea"]);
});

test('run anagram with array 2', () => {  
    const array = ["Alegan","Ángela","galena"]
    expect(anagram(array)).toEqual(["Ángela","Galena"]);
});

test('run anagram with array 3', () => {    
    const array = ["Riesgo","Sergio","Regio"]
    expect(anagram(array)).toEqual(["Sergio"]);  
});

test('run anagram with array 4', () => {    
    const array = ["Agranda","granada","nada"]
    expect(anagram(array)).toEqual(["granada"]);  
});

test('run anagram with array 5', () => {    
    const array = ["Desamparador","rama","desparramado"]
    expect(anagram(array)).toEqual(["desparramado"]);  
});

test('run anagram with array 6', () => {    
    const array = ["Licúa","Lucía","Lucí"]
    expect(anagram(array)).toEqual(["Lucía"]);  
});

test('run anagram with array 7', () => {    
    const array = ["Conservadora","conversadora"]
    expect(anagram(array)).toEqual(["conversadora"]);  
});
