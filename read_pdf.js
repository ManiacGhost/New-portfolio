const fs = require('fs');
const pdf = require('pdf-parse');
const buffer = fs.readFileSync('Harsh_Pandey_Resume_6_2_page.pdf');
pdf(buffer).then(data => console.log(data.text)).catch(console.error);
