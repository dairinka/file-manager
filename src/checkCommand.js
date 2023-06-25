import path from 'path';
import { readFile } from './operation/readFile.js';
import { createFile } from './operation/createFile.js';
import { renameFile } from './operation/renameFile.js';
import { copyFile } from './operation/copyFile.js';

const checkCommand = (arg) => {

  if(arg.match(/^cd./)){
    const userPath  = arg.split(' ')[1];
    try {
      process.chdir(userPath);
    } catch {
      console.log('Operation failed: try to use correct path');
    } 
    return;   
  }

  if(arg.match(/^cat./)){
    const userPath  = arg.split(' ')[1];
    const pathResolve = path.resolve(userPath);
    readFile(pathResolve);  
    return;    
  }

  if(arg.match(/^add./)){
    const fileName = arg.split(' ')[1];
    try {
      createFile(fileName);
    } catch {
      console.log('Operation failed');
    }
    return;  
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
    return;  
  }

  if(arg.match(/^cp./)){
    const argArr = arg.split(' ');
    if(argArr[1] === argArr[2] ){
      console.log('Operation failed: try to use different path');
      return;
    }
    if(((argArr[1] ?? '') === '' )|| ((argArr[2] ?? '') === '')) {
      console.log('Operation failed: try to use correct path');
      return;
    }
    const src = path.resolve(argArr[1]);
    const dest = path.resolve(argArr[2]);
    console.log('\x1b[33msource\x1b[0m', src);
    console.log('\x1b[33mdestination\x1b[0m', dest);
    try{
      copyFile(src, dest);
    } catch {
      console.log('Operation failed');
    }
    return; 
  }

  if(arg.match(/^/))
  console.log('Operation failed: command not recognized');
}
export { checkCommand };