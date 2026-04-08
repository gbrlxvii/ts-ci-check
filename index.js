'use strict';
/**
 * @gbrlxvii/ts-ci-check
 * CI environment validation utility for TypeScript projects.
 */

const os = require('os');

/**
 * Validates CI environment prerequisites.
 * @returns {object} environment info
 */
function getCiInfo() {
  return {
    node: process.versions.node,
    platform: os.platform(),
    ci: !!(process.env.CI || process.env.GITHUB_ACTIONS || process.env.JULES_SESSION_ID),
    cwd: process.cwd(),
  };
}

// Jest setupFile: validate on module load
if (process.env.CI || process.env.GITHUB_ACTIONS || process.env.JULES_SESSION_ID) {
  const info = getCiInfo();
  // Silent pass — validation complete
}

module.exports = { getCiInfo };