import {
  expect, test,
} from '@jest/globals';
import main from '../src/index';

test('result', () => {
  expect(main('../__fixtures__/file1.json', '../__fixtures__/file2.json')).toEqual(`{
  - follow: false
    host: hexlet.io
  - proxy: 123.234.53.22
  - timeout: 50
  + timeout: 20
  + verbose: true
}`);
});
