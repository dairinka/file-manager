import path from 'path';
import { readFile } from './operation/readFile.js';
import { createFile } from './operation/createFile.js';
import { renameFile } from './operation/renameFile.js';

const checkCommand = (arg) => {

  if(arg.match(/^cd./)){
    const userPath  = arg.split(' ')[1];
    try {
      process.chdir(userPath);
    } catch {
      console.log('Operation failed: try to use correct path');
    }    
  }

  if(arg.match(/^cat./)){
    const userPath  = arg.split(' ')[1];
    const pathResolve = path.resolve(userPath);
    readFile(pathResolve);    
  }

  if(arg.match(/^add./)){
    const fileName = arg.split(' ')[1];
    try {
      createFile(fileName);
    } catch {
      console.log('Operation failed');
    }
  }

  if(arg.match(/^rn./)){
    const argArr = arg.split(' ');
    const src = path.resolve(argArr[1]);
    const dest = path.resolve(argArr[2]);
    try {
      renameFile(src, dest);
    } catch {
      console.log('Operation failed');
    }
  }
}
export { checkCommand };