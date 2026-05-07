#!/usr/bin/env node
/**
 * Cross-platform dev script wrapper for export mode
 * Sets BUILD_MODE environment variable and runs next dev
 * This avoids dependency on the cross-env package
 */
const { spawn } = require('child_process');

process.env.BUILD_MODE = 'export';

const args = ['dev'];
const child = spawn('next', args, {
  stdio: 'inherit',
  shell: true,
  env: process.env
});

child.on('exit', (code) => {
  process.exit(code || 0);
});
