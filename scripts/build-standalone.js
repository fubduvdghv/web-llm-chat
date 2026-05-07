#!/usr/bin/env node
/**
 * Cross-platform build script wrapper
 * Sets BUILD_MODE environment variable and runs next build
 * This avoids dependency on the cross-env package
 */
const { execFile } = require('child_process');
const path = require('path');

process.env.BUILD_MODE = 'standalone';

// Resolve the next CLI executable path
const nextBin = path.join(__dirname, '..', 'node_modules', '.bin', 'next');

const child = execFile(nextBin, ['build'], {
  stdio: 'inherit',
  env: process.env
});

child.on('error', (err) => {
  console.error('Failed to start next build:', err);
  process.exit(1);
});

child.on('exit', (code) => {
  process.exit(code || 0);
});


