import fs from 'fs';
import { createHash } from 'crypto';

const calculateHash = (srcFilePath) => {
  fs.readFile(srcFilePath, (err, data) => {
      if(err) {
        console.log('Operation failed');
        return;
      };
      const hash = createHash('sha256').update(data).digest('hex');
      process.stdout.write('\x1b[36m');
      console.log(hash, '\x1b[0m');
  })
}

export { calculateHash };