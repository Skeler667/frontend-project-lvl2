import  genDiff  from '../src/genDiff';
import _ from 'lodash'


test('result', () => {
    expect(genDiff('../__fixtures__/file1.json', '../__fixtures__/file2.json')).toEqual(`{
  - follow: false
    host: hexlet.io
  - proxy: 123.234.53.22
  - timeout: 50
  + timeout: 20
  + verbose: true
}`);
  });