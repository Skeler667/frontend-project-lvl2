import stylish from './stylish.js';
import plain from './plain.js';

export default (buildTree, format) => {
  switch (format) {
    case 'stylish':
      return stylish(buildTree);
    case 'plain':
      return plain(buildTree);
    case 'json':
      return JSON.stringify(buildTree);
    default:
      return new Error(`Type ${format} not supported`);
  }
};
