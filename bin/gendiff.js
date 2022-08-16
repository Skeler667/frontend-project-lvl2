#!/usr/bin/env node
const { Command } = require('commander');
const program = new Command();

program
  .name('gendiff')
  .arguments('<filepath1> <filepath2>')
  .description('Compares two configuration files and shows a difference.')
  .version('1.1.1')
  .option('-f, --format [type]', 'output format')

program.parse();  