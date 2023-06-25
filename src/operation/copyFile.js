import fs from 'fs';
import path from 'path';

const copyFile = (src, dest, cb) => {
  const fileSrcName = path.basename(src);
  const fileDestName = path.basename(dest);

  if(path.extname(fileDestName) === '') {
    fs.mkdir(dest, { recursive: true }, (_, userPath) => {
      
      if(userPath) console.log(`Folder ${dest} was created`);

      const pathDestFile = path.join(dest, fileSrcName);
      const rs = fs.createReadStream(src);
      const ws = fs.createWriteStream(pathDestFile);
      rs.pipe(ws);

      rs.on('error', (err) => {
        console.log(`Operation failed: ${err.message}`);
      })
      ws.on('error', (err) => {
        console.log(`Operation failed: ${err.message}`);
      })
      ws.on('finish', () => {
        console.log('\x1b[32mFile was copied\x1b[0m');
        if(cb) cb();
      })
    })
  } else {
    console.log('Operation failed: try to specify correct destination folder')
  } 
  
} 

export { copyFile };