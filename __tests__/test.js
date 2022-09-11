import {
  expect, test,
} from '@jest/globals';
import main from '../src/index';

test('json parse', () => {
  expect(main('../__fixtures__/file1.json', '../__fixtures__/file2.json')).toEqual(`{
  - follow: false
    host: hexlet.io
  - proxy: 123.234.53.22
  - timeout: 50
  + timeout: 20
  + verbose: true
}`);
});

test('yaml parse', () => {
  expect(main('../__fixtures__/file1.yaml', '../__fixtures__/file2.yaml')).toEqual(`{
  - follow: false
    host: hexlet.io
  - proxy: 123.234.53.22
  - timeout: 50
  + timeout: 20
  + verbose: true
}`);
});
