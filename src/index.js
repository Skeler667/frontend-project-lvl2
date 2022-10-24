import { readFileSync } from 'node:fs';
import path from 'node:path';
import parse from './parse.js';
import buildTree from './builderTree.js';
import format from './formatters/index.js';

const extractFormat = (filepath) => path.extname(filepath).slice(1);
const buildFullPath = (filepath) => path.resolve(process.cwd(), filepath);
const getData = (filepath) => parse(readFileSync(filepath, 'utf-8'), extractFormat(filepath));

const genDiff = (filepath1, filepath2, outputFormat = 'stylish') => {
  const data1 = getData(buildFullPath(filepath1));
  const data2 = getData(buildFullPath(filepath2));
  const tree = buildTree(data1, data2);
  return format(tree, outputFormat);
};
export default genDiff;
