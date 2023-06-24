import path from 'path';
import fs from 'fs';

const checkCommand = (arg) => {

  if(arg.match(/^cd./)){
    const userPath  = arg.split(' ')[1];
    try {
      process.chdir(userPath);
    } catch {
      console.log('Operation failed: 1try to use correct path');
    }    
  }

  if(arg.match(/^cat./)){
    const userPath  = arg.split(' ')[1];
    const pathResolve = path.resolve(userPath);

    fs.access(pathResolve, fs.constants.F_OK | fs.constants.R_OK, (err) => {
      if (err) {
        console.log('Operation failed: try to use correct path');
      } else {
        
        fs.stat(userPath, (err, stats) => {
          if(err) console.log('Operation failed');
      
          const fileType = stats.isFile() ? 'file': 'directory';
       
          if (fileType === 'directory') {
            console.log('Operation failed: try to use file path');
          } else {

            const rs = fs.createReadStream(pathResolve, {encoding: 'UTF-8'});

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
}
export { checkCommand };