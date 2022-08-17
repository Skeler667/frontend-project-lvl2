import { readFileSync } from 'fs';
import * as path from 'path';


export default (filepath1, filepath2) => {
const data1 = readFileSync(path.resolve('__fixtures__', filepath1), 'utf-8')
const data2 = readFileSync(path.resolve('__fixtures__', filepath2), 'utf-8')
console.log(data2);
const parse1 = JSON.parse(data1)
const parse2 = JSON.parse(data2)
};