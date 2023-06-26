import fs from 'fs';
import { createHash } from 'crypto';

const calculateHash = (srcFilePath) => {
  fs.readFile(srcFilePath, (err, data) => {
      if(err) {
        console.log('Operation failed');
        return;
      };
      const hash = createHash('sha256').update(data).digest('hex');
      console.log('\x1b[36m', hash, '\x1b[0m');
  })
}

export { calculateHash };