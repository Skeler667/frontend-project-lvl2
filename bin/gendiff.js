#!/usr/bin/env node
import { Command } from 'commander';
import genDiff from '../src/genDiff.js';

const program = new Command();

program
  .version('6.6.6', '-V, --version', 'output the version number')
  .argument('<filepath1> <filepath2>')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format [type]', 'output format')
  .action((filepath1, filepath2) => {
    return genDiff(filepath1, filepath2);
  });
program.parse(process.argv);  