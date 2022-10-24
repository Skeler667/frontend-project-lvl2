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

const getPropertyName = (properties, property) => [...properties, property].join('.');

const render = (node, properties) => {
    switch (node.type) {
      case 'root': {
        const output = node.children.flatMap((child) => render(child, properties));
        return output.join('\n');
      }
      case 'added':
        return `Property '${getPropertyName(properties, node.key)}' was added with value: ${stringify(node.value)}`;
      case 'removed':
        return `Property '${getPropertyName(properties, node.key)}' was removed`;
      case 'unchanged':
        return [];
      case 'changed':
        return `Property '${getPropertyName(properties, node.key)}' was updated. From ${stringify(node.value1)} to ${stringify(node.value2)}`;
      case 'nested':
          const output = node.children.flatMap((child) => render(child, properties));
          return output.join('\n');
      default:
        throw new Error('This tree is bad. Try another tree');
    }
};

export default (tree) => render(tree, []);
