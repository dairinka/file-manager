import os, { homedir } from 'os';

import { USERNAME } from './userName.js';
import { ListenProcess } from './listenProcess.js';


try {
  const welcomeMessage = `Welcome to the File Manager, ${USERNAME}!`;
  console.log(`\x1b[32m${welcomeMessage}\x1b[0m`);

  const userHomeDir = os.homedir();
  process.chdir(userHomeDir);
  console.log( 'You are currently in\x1b[32m', process.cwd(), '\x1b[0m');

  ListenProcess();
} catch {
  console.log('Operation failed');
} 

