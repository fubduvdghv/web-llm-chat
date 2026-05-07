#!/usr/bin/env node
/**
 * Cross-platform build script wrapper
 * Sets BUILD_MODE environment variable and runs next build
 * This avoids dependency on the cross-env package
 */
const { spawn } = require('child_process');

process.env.BUILD_MODE = 'standalone';

const args = ['build'];
const child = spawn('next', args, {
  stdio: 'inherit',
  shell: true,
  env: process.env
});

child.on('exit', (code) => {
  process.exit(code || 0);
});
