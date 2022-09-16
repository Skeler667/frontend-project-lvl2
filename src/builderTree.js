import _ from 'lodash';

const builderTree = (data1, data2) => {
    const keys = _.union(Object.keys(data1), Object.keys(data2));
    const sorted = keys.sort();
    const resultObj = sorted.map((key) => {
      if (_.isObject(data1[key]) && _.isObject(data2[key])) {
       return { key, type: "nested", children: builderTree(data1[key], data2[key]),} 
      }
      if (!_.has(data1, key)) {
        return { key, value: data2[key], type: "added"};
      }
      if (!_.has(data2, key)) {
        return { key, value: data1[key], type: "removed"};
      }
      if (data1[key] !== data2[key]) {
        return { key, value1: data1[key], value2: data2[key], type: "changed"};
      }
    return {key, value: data1[key], type: 'unchanged'}
    });
    return resultObj;
  };

export default builderTree;