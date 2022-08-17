import { readFileSync } from 'fs';
import * as path from 'path';


export default (filepath1, filepath2) => {
const pathToFile = path.resolve('__fixtures__', filepath1);
const read = readFileSync(pathToFile, 'utf-8')
const data = JSON.parse(read)
console.log(data); 
};