#!/usr/bin/env node

/**
 * My OpenClaw Personal Project - Main Entry Point
 * 
 * This is a personal OpenClaw project for learning and experimentation.
 * You can extend this to create custom skills, plugins, and integrations.
 */

console.log('🎯 My OpenClaw Personal Project');
console.log('===============================');
console.log('');

// Basic project information
const projectInfo = {
  name: 'my-openclaw',
  version: '1.0.0',
  description: 'Personal OpenClaw project for learning and experimentation',
  author: 'hendrychang1981',
  repository: 'https://github.com/hendrychang1981/my-openclaw'
};

console.log('📦 Project Information:');
console.log(`  Name: ${projectInfo.name}`);
console.log(`  Version: ${projectInfo.version}`);
console.log(`  Description: ${projectInfo.description}`);
console.log(`  Author: ${projectInfo.author}`);
console.log(`  Repository: ${projectInfo.repository}`);
console.log('');

// Available directories
console.log('📁 Project Structure:');
console.log('  src/     - Source code');
console.log('  skills/  - Custom skills');
console.log('  plugins/ - Custom plugins');
console.log('  docs/    - Documentation');
console.log('');

// Next steps
console.log('🚀 Next Steps:');
console.log('  1. Explore the OpenClaw documentation: https://docs.openclaw.ai');
console.log('  2. Create your first skill in the skills/ directory');
console.log('  3. Experiment with custom plugins in the plugins/ directory');
console.log('  4. Check the official OpenClaw repository for examples: https://github.com/openclaw/openclaw');
console.log('');

console.log('💡 Tip: Run "npm run dev" to start your project (when configured)');
console.log('');

// Check if OpenClaw is available
try {
  const openclaw = require('openclaw');
  console.log('✅ OpenClaw is available in this environment');
} catch (error) {
  console.log('⚠️  OpenClaw is not installed. Install it with: npm install openclaw');
}

console.log('');
console.log('🎉 Happy coding!');