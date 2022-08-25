#!/usr/bin/env node
import { Command } from 'commander';
import gendiff from '../src/index.js';

const program = new Command();

program
  .version('6.6.6', '-V, --version', 'output the version number')
  .argument('<filepath1>', 'first arg')
  .argument('<filepath2>', 'second arg')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format [type]', 'output format')
  .action((filepath1, filepath2) => gendiff(filepath1, filepath2));
program.parse(process.argv);
