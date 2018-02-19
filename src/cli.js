#!/usr/bin/env node --harmony

const sade = require('sade');
const prog = sade('lg');
const { read, render } = require('./');
const { to } = require('./utils');

prog.version('1.0.5')
  .option('--globber, -g', 'globber name')
  .option('--renderer, -r', 'renderer name');

prog
  .command('list <pattern>', 'list glob', { default: true })
  // .describe('list glob')
  .option('-a, --all', 'list all')
  .option('-e, --exclude', 'exclude')
  .option('-i, --include', 'include')
  .example('lg src/**/*.js')
  .example('lg "src/**/*.js !src/**/*.spec.js"')
  .action(async (pattern, opts) => {
    if (!pattern) {
      prog.help();
      return;
    }
    console.log('opts', opts);
    const result = await read(pattern, opts);
    if(result){
      render(result);
    }else{
      console.error('no result');
    }
  });

prog.parse(process.argv);


