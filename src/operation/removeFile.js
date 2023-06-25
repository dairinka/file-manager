import fs from 'fs';

const removeFile = (userPath) => {
  fs.rm(userPath, (err) => {
    if(err) {
      console.log(`Operation failed: ${err.message}`);
    } else {
      console.log(`\x1b[32File ${userPath} was deleted\x1b[0m`);
    }
  })
}
export { removeFile };