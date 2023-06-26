import fs from 'fs';

const renameFile = (src, dest) => {
  fs.access(dest, (err) => {
    if (!err) {
        console.error(`Operation failed: file ${dest} already exist`);
        return;
    }
    fs.rename(src, dest, (err) => {
      if(err) {
        console.log(`Operation failed: file ${src} does not exist or you have not permission`);
      } else {
        process.stdout.write('\x1b[32m');
        console.log('File was renamed \x1b[0m');
      }            
    })
  })
}
export { renameFile };