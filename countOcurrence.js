// 1. Count the occurrences.
// You are building a word count generator that will take a large string of text as input and output the words and
// the number of times they are present in the string. Your task is to write a function that can count the
// occurrences of each word in the string and return a Map containing each word's count. For simplicity, you can
// assume that the string only contains alphabetic characters and spaces.

function wordCountGenerator(text) {
    const wordCount = new Map();
    const words = text.split(/\s+/); 

    words.forEach(word => {
        
        const cleanedWord = word.trim().toLowerCase();

        
        wordCount.set(cleanedWord, (wordCount.get(cleanedWord) || 0) + 1);
    });

    return wordCount;
}


const inputText = "This is a sample text. This text contains some words, and this is a sample.";
const result = wordCountGenerator(inputText);


result.forEach((count, word) => {
    console.log(`${word}: ${count}`);
});
