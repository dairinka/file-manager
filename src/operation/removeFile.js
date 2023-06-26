import fs from 'fs';

const removeFile = (userPath) => {
  console.log('userPath - parameter for removeFile');
  fs.unlink(userPath, (error) => {
    if (error) {
      console.log(`Operation failed (delete source file): ${error.message}`);
    } else {
      console.log(`\x1b[32File ${userPath} was deleted\x1b[0m`);

    }
  })
}
export { removeFile };