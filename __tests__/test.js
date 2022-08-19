import  genDiff  from '../src/genDiff';
import { readFileSync } from 'fs';
import * as path from 'path';
import _ from 'lodash'


test('result', () => {
    expect(genDiff('../__fixtures__/file1.json', '../__fixtures__/file2.json')).toEqual(`{
  - follow: false
    host: hexlet.io
  - proxy: 123.234.53.22
  - timeout: 50
  + timeout: 20
  + verbose: true
}
    `);
  });