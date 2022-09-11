#!/usr/src/env node
import { readFileSync } from 'fs';
import * as path from 'path';
import _ from 'lodash';
import parser from '../module_parse/parse.js';

const compare = (data1, data2) => {
  const keys = _.union(Object.keys(data1), Object.keys(data2));
  const sorted = keys.sort();
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
    return `    ${key}: ${data1[key]}`;
  });
  const joinStr = keyMap.join('\n');
  return `{\n${joinStr}\n}`;
};

export default (filepath1, filepath2) => {
  const format1 = path.extname(filepath1).slice(1);
  const format2 = path.extname(filepath2).slice(1);
  const data1 = readFileSync(path.resolve('__fixtures__', filepath1), 'utf-8');
  const data2 = readFileSync(path.resolve('__fixtures__', filepath2), 'utf-8');
  // console.log(data1);
  const dataParse1 = parser(data1, format1);
  const dataParse2 = parser(data2, format2);
  return compare(dataParse1, dataParse2);
};

export { compare };
