import fs from 'fs';
const pathFile = `${__dirname}/../../input.txt`
const file = fs.readFileSync(pathFile);

export default String(file);