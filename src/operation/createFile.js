import fs from 'fs';
import path from 'path'

const createFile = (fileName) => {
  const regExp = /[<,>,:,",\/,\\,|,?,*]/
  if (regExp.test(fileName)) {
    console.log('Operation failed: use correct character for file name');
    return;
  }
  const filePath = path.resolve(fileName);
  fs.open(filePath, 'a+', (err) => {
    if (err){
      console.log('Operation failed: check your permission or try to use another directory');
    } else {
      console.log('\x1b[32mFile was created\x1b[0m');
    }
    
  } )
}
export {createFile};