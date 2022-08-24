#!/usr/src/env node
import { readFileSync } from 'fs';
import * as path from 'path';
import _ from 'lodash'

const genDiff = (data1, data2) => {
    const keys = _.union(Object.keys(data1), Object.keys(data2));
    const sorted = keys.sort();
    console.log(sorted);
    const keyMap = sorted.flatMap((key) => {
    if (!_.has(data1, key)) {
        return `  + ${key}: ${data2[key]}`;
    }
    if (!_.has(data2, key)) {
        return `  - ${key}: ${data1[key]}`;
    }
    if (data1[key] !== data2[key]) { 
        const diff1 = `  - ${key}: ${data1[key]}`;
        const diff2 = `  + ${key}: ${data2[key]}`;
        return [diff1, diff2];
    }
    if (data1[key] === data2[key] ) {
        return `    ${key}: ${data1[key]}`;
    }} );
    const joinStr = keyMap.join('\n');
    console.log(`{\n${joinStr}\n}`)
    return `{\n${joinStr}\n}`;
  };

export default (filepath1, filepath2) => {
const data1 = readFileSync(path.resolve('__fixtures__', filepath1), 'utf-8')
const data2 = readFileSync(path.resolve('__fixtures__', filepath2), 'utf-8')

const parseData1 = JSON.parse(data1)
const parseData2 = JSON.parse(data2)

 return genDiff(parseData1,parseData2);
};

export { genDiff };