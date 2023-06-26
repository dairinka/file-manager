import fs from 'fs';
import zlib from 'zlib';
import path from 'path';

const decompressFile = (src, dest) => {
  const fileSrcName = path.basename(src);
  const fileDestName = path.basename(dest);

  if(path.extname(fileDestName) === '') {
    
      const destFileName = path.parse(fileSrcName).name;
      const pathDestFile = path.join(dest, destFileName);
      const rs = fs.createReadStream(src);
      const ws = fs.createWriteStream(pathDestFile);
      const zl = zlib.createBrotliDecompress();

      rs.pipe(zl).pipe(ws);

      rs.on('error', (err) => {
        console.log(`Operation failed: ${err.message}`);
      })

      ws.on('error', (err) => {
        console.log(`Operation failed: ${err.message}`);
      })
      ws.on('finish', () => {
        process.stdout.write('\x1b[32m');
        console.log(`File was decompressed to ${pathDestFile}\x1b[0m`);
      })
    
  }
}
export { decompressFile };