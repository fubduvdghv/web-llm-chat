#!/usr/bin/env node
/**
 * Cross-platform dev script wrapper for export mode
 * Sets BUILD_MODE environment variable and runs next dev
 */
const { execSync } = require('child_process');

process.env.BUILD_MODE = 'export';

try {
  execSync('next dev', {
    stdio: 'inherit',
    shell: true,
    env: process.env
  });
} catch (error) {
  process.exit(error.status || 1);
}



