const anagram = require('../src/anagram');

describe('anagram()', () => {
    it('when no words are provided there is not any anagram', () => {
        // input
        const word = "any"
        const words = []

        // output
        const anagrams = anagram(word, words)

        // expected
        expect(anagrams).toHaveLength(0);

    })

    it('when empty word is provided no anagrams are returned', () => {
        // input
        const word = "any"
        const words = [""]

        // output
        const anagrams = anagram(word, words)

        // expected
        expect(anagrams).toHaveLength(0);

    })

    it('when words contain the word should return as anagram', () => {
        // input
        const word = "ave"
        const words = ["ave"]

        // output
        const anagrams = anagram(word, words)

        // expected
        expect(anagrams).toEqual(["ave"])

    })

    it('when words contain an anagram should return this word as anagram', () => {
        // input
        const word = "ave"
        const words = ["eva"]

        // output
        const anagrams = anagram(word, words)

        // expected
        expect(anagrams).toEqual(["eva"])

    })

    const scenarios = [
        { word: "ave", words: ["vea"], expected: ["vea"] },
        { word: "Ave", words: ["Eva", "Va", "Vea"], expected: ["Eva", "Vea"] },
    ]

    scenarios.forEach(({ word, words, expected }) => {
        it(`given the word "${word}" and the words "[${words}]" the anagrams are "${expected}"`, () => {
            const anagrams = anagram(word, words)

            expect(anagrams).toEqual(expected)

        })
    })

    it('when words contain an anagram should return this word as anagram 2', () => {
        // input
        const word = "ave"
        const words = ["fea"]

        // output
        const anagrams = anagram(word, words)

        // expected
        expect(anagrams).toHaveLength(0);

    })

    it('run anagram with array 2', () => {
        const word = "Alegan"
        const array = ["Angela", "Galena"]
        expect(anagram(word, array)).toEqual(["Angela", "Galena"]);
    });

    it('run anagram with array 3', () => {
        const array = ["Sergio", "Regio"]
        expect(anagram("Riesgo", array)).toEqual(["Sergio"]);
    });

    it('run anagram with array 4', () => {
        const array = ["granada", "nada"]
        expect(anagram("Agranda", array)).toEqual(["granada"]);
    });

    it('run anagram with array 5', () => {
        const array = ["rama", "desparramado"]
        expect(anagram("Desamparador", array)).toEqual(["desparramado"]);
    });

    it.skip('run anagram with array 6', () => {
        const array = ["Lucía", "Lucí"]
        expect(anagram("Licúa", array)).toEqual(["Lucía"]);
    });

    it('run anagram with array xyz', () => {
        const array = ["conversadora"]
        expect(anagram("Conservadora", array)).toEqual(["conversadora"]);
    });
})

