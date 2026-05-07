#!/usr/bin/env node
/**
 * Cross-platform dev script wrapper for export mode
 * Sets BUILD_MODE environment variable and runs next dev
 * This avoids dependency on the cross-env package
 */
const { spawn } = require('child_process');
const path = require('path');

process.env.BUILD_MODE = 'export';

// Resolve the next CLI executable path
const nextBin = path.join(__dirname, '..', 'node_modules', '.bin', 'next');

const child = spawn(nextBin, ['dev'], {
  stdio: 'inherit',
  shell: true,
  env: process.env
});

child.on('exit', (code) => {
  process.exit(code || 0);
});

