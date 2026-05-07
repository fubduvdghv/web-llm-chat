#!/usr/bin/env node
/**
 * Cross-platform build script wrapper
 * Sets BUILD_MODE environment variable and runs next build
 */
const { execSync } = require('child_process');

process.env.BUILD_MODE = 'standalone';

try {
  execSync('next build', {
    stdio: 'inherit',
    shell: true,
    env: process.env
  });
} catch (error) {
  process.exit(error.status || 1);
}



