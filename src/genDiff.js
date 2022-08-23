#!/usr/src/env node
import { readFileSync } from 'fs';
import * as path from 'path';
import _ from 'lodash'

const genDiff = (data1, data2) => {
    const trueKey = '+';
    const falseKey = '-';
    const nothingKey = '';
    const keys = _.union(Object.keys(data1), Object.keys(data2));
    const sorted = keys.sort();
    let result = '';
    for (const key of keys) {
        if (_.has(data1, key)) {
            result += `  ${falseKey} ${key + ':'} ${data1[key]}\n`;
        }
        if (_.has(data2, key)) {
            result += `  ${trueKey} ${key + ':'} ${data2[key]}\n`;
        }
        if (data1[key] !== data2[key] ) {
            result += `  ${trueKey} ${key + ':'} ${data2[key]}\n`;
        }
        if (data1[key] === data2[key]) { 
            result += `   ${nothingKey} ${key + ':'} ${data1[key]}\n`;
        }
    }
     console.log(result)
    return '{\n' + result + '}';
  };

export default (filepath1, filepath2) => {
const data1 = readFileSync(path.resolve('__fixtures__', filepath1), 'utf-8')
const data2 = readFileSync(path.resolve('__fixtures__', filepath2), 'utf-8')

const parseData1 = JSON.parse(data1)
const parseData2 = JSON.parse(data2)

 return genDiff(parseData1,parseData2);
};

export { genDiff };