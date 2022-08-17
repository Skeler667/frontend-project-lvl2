#!/usr/bin/env node
import { Command } from 'commander';
import genDiff from '../src/genDiff';

const program = new Command();

program
  .version('0.0.1', '-V, --version', 'output the version number')
  .argument('<filepath1> <filepath2>')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format [type]', 'output format')
  .action((filepath1, filepath2) => {
    console.log(genDiff(filepath1, filepath2));
  });
program.parse();  