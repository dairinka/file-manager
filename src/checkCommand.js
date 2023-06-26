import path from 'path';
import os from 'os';
import { readFile } from './operation/readFile.js';
import { createFile } from './operation/createFile.js';
import { renameFile } from './operation/renameFile.js';
import { copyFile } from './operation/copyFile.js';
import { moveFile } from './operation/moveFile.js';
import { removeFile } from './operation/removeFile.js';
import { calculateHash } from './operation/calculateHash.js';
import { checkTwoPathArgument } from './utils/checkTwoPathArgument.js';
import { correctTwoPath } from './utils/correctTwoPath.js';

const checkCommand = (arg) => {

  if(arg.match(/^cd./)) {
    const userPath  = arg.split(' ')[1];
    try {
      process.chdir(userPath);
    } catch {
      console.log('Operation failed: try to use correct path');
    } 
    return;   
  }

  if(arg.match(/^cat./)) {
    try {
      const userPath  = arg.split(' ')[1];
      const pathResolve = path.resolve(userPath);
      readFile(pathResolve);  
    } catch {
      console.log('Operation failed');
    }
    return;    
  }

  if(arg.match(/^add./)) {
    try {
      const fileName = arg.split(' ')[1];
      createFile(fileName);
    } catch {
      console.log('Operation failed');
    }
    return;  
  }

  if(arg.match(/^rn./)) {
    try {
      const argArr = arg.split(' ');
      const isPathCorrect = checkTwoPathArgument(argArr);
      
      if(isPathCorrect) {
        const [src, dest] = correctTwoPath(argArr);
        renameFile(src, dest);
      }
      
    } catch {
      console.log('Operation failed');
    }
    return;  
  }

  if(arg.match(/^cp./)) {
    try {
      const argArr = arg.split(' ');
      const isPathCorrect = checkTwoPathArgument(argArr);

      if(isPathCorrect) {
        const [src, dest] = correctTwoPath(argArr);
        copyFile(src, dest);
      }
    } catch {
      console.log('Operation failed');
    }
    return; 
  }

  if(arg.match(/^mv./)) {
    try {
      const argArr = arg.split(' ');

      const isPathCorrect = checkTwoPathArgument(argArr);

      if(isPathCorrect) {
        const [src, dest] = correctTwoPath(argArr);
        moveFile(src, dest);
      }

    } catch {
      console.log('Operation failed');
    }
    return;
  }

  if(arg.match(/^rm./)) {
    try {
      const userPath  = arg.split(' ')[1];
      console.log('userPath', userPath);
      const pathResolve = path.resolve(userPath);
      console.log('pathResolve', pathResolve);
      removeFile(pathResolve);
    } catch {
      console.log('Operation failed');
    }
    return;
  }

  if(arg.match(/^os./)) {
    try {
      const argum = arg.split(' ')[1];
      switch(argum) {
        case '--eol':
          console.log(JSON.stringify(os.EOL));
          break;
        case '--cpus':
          console.log(os.cpus());
          break;
        case '--homedir':
          console.log(os.homedir());
          break;
        case '--username':
          console.log(os.userInfo().username);
          break;
        case '--architecture':
          console.log(os.arch());
          break;
      }
    } catch {
      console.log('Operation failed');
    }
    return;
  }

  if(arg.match(/^hash./)){
    try{
      const argum = arg.split(' ')[1];
      calculateHash(argum);
    } catch {
      console.log('Operation failed');
    }
    return;
  }


  console.log('Operation failed: command not recognized');
}
export { checkCommand };