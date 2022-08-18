#!/usr/bin/env node
import { Command } from 'commander';
import genDiff from '../src/genDiff.js';

const program = new Command();

program
  .version('6.6.6', '-V, --version', 'output the version number')
  .argument('<filepath1>', 'first arg')
  .argument('<filepath2>', 'second arg')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format [type]', 'output format')
  .action((filepath1, filepath2) => {
    return genDiff(filepath1, filepath2);
  });
program.parse(process.argv);  