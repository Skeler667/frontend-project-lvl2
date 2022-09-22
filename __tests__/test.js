import {
  expect, test,
} from '@jest/globals';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getFixturePath = (filename) => path.resolve(__dirname, '../__fixtures__/', filename);
const treeStylish = readFileSync(getFixturePath('stylish.txt'), 'utf-8');
const treePlain = readFileSync(getFixturePath('plain.txt'), 'utf-8');

test(('stylish'), () => {
  expect(genDiff(getFixturePath('file1.json'), getFixturePath('file2.json'))).toBe(treeStylish);
  expect(genDiff(getFixturePath('file1.yaml'), getFixturePath('file2.yaml'))).toEqual(treeStylish);
});
test(('plain'), () => {
  expect(genDiff(getFixturePath('file1.json'), getFixturePath('file2.json'), 'plain')).toBe(treePlain);
  expect(genDiff(getFixturePath('file1.yaml'), getFixturePath('file2.yaml'), 'plain')).toEqual(treePlain);
});
