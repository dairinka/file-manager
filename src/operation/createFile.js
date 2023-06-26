import fs from 'fs';
import path from 'path'

const createFile = (fileName) => {
  const regExp = /[<,>,:,",\/,\\,|,?,*]/
  if (regExp.test(fileName)) {
    console.log('Operation failed: use correct character for file name');
    return;
  }
  const filePath = path.resolve(fileName);
  fs.open(filePath, 'w', (err, fd) => {
    if (err){
      console.log('Operation failed: check your permission or try to use another directory');
    } else {
      process.stdout.write('\x1b[32m');
      console.log('File was created \x1b[0m');

      fs.close(fd, (err) => {
        if (err) {
          console.log(`Operation failed: error closing the file ${err}`);
        }
      });
    }
    
  } )
}
export {createFile};