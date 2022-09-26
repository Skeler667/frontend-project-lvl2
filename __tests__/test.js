import {
  expect, test,
} from '@jest/globals';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import genDiff from '../src/index.js';
import stylish from '../src/formatters/stylish.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getFixturePath = (filename) => path.resolve(__dirname, '../__fixtures__/', filename);
const resultTreeStylish = readFileSync(getFixturePath('stylish.txt'), 'utf-8');
const resultTreePlain = readFileSync(getFixturePath('plain.txt'), 'utf-8');
const resultTreeJson = readFileSync(getFixturePath('formatJson.txt'), 'utf-8');
const formaters = ['stylish', 'plain', 'json'];

test(('stylish'), () => {
  expect(genDiff(getFixturePath('file1.json'), getFixturePath('file2.json'), formaters[0])).toBe(resultTreeStylish);
  expect(genDiff(getFixturePath('file1.yaml'), getFixturePath('file2.yaml'), formaters[0])).toEqual(resultTreeStylish);
});
test(('plain'), () => {
  expect(genDiff(getFixturePath('file1.json'), getFixturePath('file2.json'), 'plain')).toBe(resultTreePlain);
  expect(genDiff(getFixturePath('file1.yaml'), getFixturePath('file2.yaml'), 'plain')).toEqual(resultTreePlain);
});
test(('json'), () => {
  expect(genDiff(getFixturePath('file1.json'), getFixturePath('file2.json'), 'json')).toBe(resultTreeJson);
  expect(genDiff(getFixturePath('file1.yaml'), getFixturePath('file2.yaml'), 'json')).toEqual(resultTreeJson);
});
