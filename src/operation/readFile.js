import fs from 'fs';

const readFile = (userPath) => {
  fs.access(userPath, fs.constants.F_OK | fs.constants.R_OK, (err) => {
    if (err) {
      console.log('Operation failed: try to use correct path');
    } else {
      
      fs.stat(userPath, (err, stats) => {
        if(err) console.log('Operation failed');
    
        const fileType = stats.isFile() ? 'file': 'directory';
     
        if (fileType === 'directory') {
          console.log('Operation failed: try to use file path');
        } else {

          const rs = fs.createReadStream(userPath, {encoding: 'UTF-8'});

          rs.on('data', (stream) => {
            process.stdout.write('\x1b[33m' + stream + '\x1b[0m\n', (err) => {
                if(err) console.log('Operation failed');
            })
          })
          
          rs.on('error', (err) => {
            console.log('Operation failed: resource busy or locked');
          })
        }
      })
    }      
  }) 
}

export { readFile };