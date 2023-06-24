import fs from 'fs';
import path from 'path';

const folderList = async () => {
  try {
    const currentDirPath = process.cwd();
    fs.readdir(currentDirPath, (err, files) => {
      if(err) console.log('Operation failed');

      const filesStatArr = [];

      files.forEach((fileName, ind, arr) => {
        const currentFilePath = path.join(currentDirPath, fileName);
        
        fs.stat(currentFilePath, (_, stats) => {
            const fileType = stats?.isDirectory ? 'directory' : 'file'; 
            filesStatArr.push({'Name': fileName, 'Type': fileType});

            if(ind === arr.length-1) {console.table(filesStatArr)}
        }) 
  
      })

    })
  } catch {
    console.log('Operation failed');
  }
}

export { folderList };