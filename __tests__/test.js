import {
  expect, test, describe,
} from '@jest/globals';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

const readFixtures = (fixtures) => readFileSync(getFixturePath(fixtures), 'utf-8');

const resultStylish = readFixtures('stylish.txt');
const resultPlain = readFixtures('plain.txt');
const resultJson = readFixtures('formatJson.txt');

describe('genDiff App', () => {
  test('should be work with json', () => {
    expect(genDiff(getFixturePath('file1.json'), getFixturePath('file2.json'), 'stylish')).toEqual(resultStylish);
    expect(genDiff(getFixturePath('file1.json'), getFixturePath('file2.json'))).toBe(resultStylish);
    expect(genDiff(getFixturePath('file1.json'), getFixturePath('file2.json'), 'plain')).toBe(resultPlain);
    expect(genDiff(getFixturePath('file1.json'), getFixturePath('file2.json'), 'json')).toBe(resultJson);
  });
  test('should be work with yaml', () => {
    expect(genDiff(getFixturePath('file1.yaml'), getFixturePath('file2.yaml'), 'stylish')).toEqual(resultStylish);
    expect(genDiff(getFixturePath('file1.yaml'), getFixturePath('file2.yaml'))).toBe(resultStylish);
    expect(genDiff(getFixturePath('file1.yaml'), getFixturePath('file2.yaml'), 'plain')).toBe(resultPlain);
    expect(genDiff(getFixturePath('file1.yaml'), getFixturePath('file2.yaml'), 'json')).toBe(resultJson);
  });
});
