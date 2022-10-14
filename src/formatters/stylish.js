import _ from 'lodash';

const indent = (depth, spacesCount = 2) => ' '.repeat(depth * spacesCount);

const formatValue = (value, depth) => {
  if (!_.isObject(value)) {
    return String(value);
  }
  const formatedString = Object.entries(value).map(([key, innerValue]) => {
    const object = { key, value: innerValue };
    return `  ${indent(depth)}  ${object.key}: ${formatValue(object.value, depth + 1)}`;
  });
  return `{\n${formatedString.join('\n')}\n${indent(depth - 1)}  }`;
};

const render = (node, depth) => {
  switch (node.type) {
    case 'root': {
      const output = node.children.map((children) => render(children, depth + 1));
      return `{\n${output.join('\n')}\n}`;
    }
    case 'added': {
      return `${indent(depth)}+ ${node.key}: ${formatValue(node.value, depth + 1)}`;
    }
    case 'removed': {
      return `${indent(depth)}- ${node.key}: ${formatValue(node.value, depth + 1)}`;
    }
    case 'unchanged': {
      return `${indent(depth)}  ${node.key}: ${formatValue(node.value, depth + 1)}`;
    }
    case 'changed': {
      const output1 = `${indent(depth)}- ${node.key}: ${formatValue(node.value1, depth + 1)}`;
      const input1 = `${indent(depth)}+ ${node.key}: ${formatValue(node.value2, depth + 1)}`;
      return `${output1}\n${input1}`;
    }
    case 'nested': {
      const output2 = node.children.map((children) => render(children, depth + 1));
      return `${indent(depth)}${node.key}: {\n${output2.join('\n')}\n${indent(depth)}}`;
    }
    default:
      return new Error('This tree is bad. Try another tree');
  }
};

const stylish = (tree) => render(tree, 1);

export default stylish;
