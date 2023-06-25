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
        console.log('\x1b[32mFile was renamed\x1b[0m');
      }            
    })
  })
}
export { renameFile };