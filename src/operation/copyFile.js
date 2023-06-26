import fs from 'fs';
import path from 'path';

const copyFile = (src, dest) => {
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
        console.log(`Operation failed(copy file rs.on): ${err.message}`);
      })

      ws.on('error', (err) => {
        console.log(`Operation failed(copy file ws.on): ${err.message}`);
      })
      ws.on('finish', () => {
        process.stdout.write('\x1b[32m');
        console.log(`File was copied to ${dest}\x1b[0m`);
      })
    })
  } else {
    console.log('Operation failed: try to specify correct destination folder')
  } 
  
} 

export { copyFile };