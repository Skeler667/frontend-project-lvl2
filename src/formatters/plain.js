import _ from 'lodash';

const stringify = (value) => {
  if (_.isObject(value)) {
    return '[complex value]';
  }
  if (typeof (value) === 'string') {
    return `'${value}'`;
  }
  return String(value);
};

const iter = (tree, acc) => {
  const result = tree.map((node) => {
    const path = [...acc, node.key].join('.');
    switch (node.type) {
      case 'added':
        return `Property '${path}' was added with value: ${stringify(node.value)}`;
      case 'removed':
        return `Property '${path}' was removed`;
      case 'unchanged':
        return null;
      case 'changed':
        return `Property '${path}' was updated. From ${stringify(node.value1)} to ${stringify(node.value2)}`;
      case 'nested':
        return `${iter(node.children, [path])}`;
      default:
        return new Error('This tree is bad. Try another tree');
    }
  });
  return _.compact(result).join('\n');
};

export default (diff) => iter(diff.children, []);
