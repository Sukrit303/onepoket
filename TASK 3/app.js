// Task 3
const fs = require('fs');

async function countWords(file){
    try{
        const data = await fs.promises.readFile(file,'utf8');
        const wordCount = data.split(/\s+/).length;
        console.log(`Total word count: ${wordCount}`);
    }catch (error){
        console.error('Error reading the file:', error);
    }
}


const file = 'data.txt';
countWords(file);