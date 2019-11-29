#!/usr/bin/env node

const shell = require('shelljs');
const { join } = require('path');
const { fork } = require('child_process');

const ret = shell.exec('./node_modules/.bin/lerna updated').stdout;
const updatedRepos = ret
  .split('\n')
  .map(line => line.replace('- ', ''))
  .filter(line => line !== '');

if (updatedRepos.length === 0) {
  console.log('No package is updated.');
  process.exit(0);
}

const cp = fork(
  join(process.cwd(), 'node_modules/.bin/lerna'),
  ['publish', '--npm-client=tnpm', '--exact'].concat(process.argv.slice(2)),
  {
    stdio: 'inherit',
    cwd: process.cwd(),
  },
);

cp.on('error', err => {
  console.log(err);
});

cp.on('close', code => {
  console.log('code', code);
  if (code === 1) {
    console.error('Failed: lerna publish');
    process.exit(1);
  }
});
