import { readFileSync } from 'node:fs';
import path from 'node:path';
import parse from './parse.js';
import buildDiff from './builderTree.js';
import format from './formatters/index.js';

const getExtension = (filepath) => path.extname(filepath).slice(1);

const readFile = (filepath) => readFileSync(path.resolve(process.cwd(), filepath), 'utf-8');

const genDiff = (filepath1, filepath2, type = 'stylish') => {
  const data1 = parse(readFile(filepath1), getExtension(filepath1));
  const data2 = parse(readFile(filepath2), getExtension(filepath2));
  const tree = buildDiff(data1, data2);
  return format(tree, type);
};

genDiff('./__fixtures__/file1.json', './__fixtures__/file2.json');

export default genDiff;
