import { USERNAME} from './userName.js';
import { folderList } from './operation/folderList.js';
import { checkCommand } from './checkCommand.js';

import * as readline from 'readline';
import {
  stdin as input,
  stdout as output,
} from 'process';

const ListenProcess = async() => {
  const goodbyeMessage = `\x1b[33mThank you for using File Manager, ${USERNAME}, goodbye!\x1b[0m`;
  const rl = readline.createInterface({ input, output });

 
  rl.on('line', (inputData) => {
    inputData = inputData.trim().toLowerCase();
    switch(inputData) {
      case 'exit':
        process.exit(0);
        break;
      case 'up':
        process.chdir('../');
        break;
      case 'ls':
        folderList();
        break;  
      default:
        checkCommand(inputData);
    }
   
  
    console.log('You are currently in\x1b[32m', process.cwd(), '\x1b[0m')
  })

  process.on('exit', () => {
    console.log(goodbyeMessage);
  })

  rl.on('SIGINT', () => {
    rl.question(
        'Are you sure you want to exit from File Manager? ',
        (answer) => {
            if (answer.match(/^y(es)?$/i)) {
              process.exit(0);
            }
        }
    );
  });
    
}

export { ListenProcess } ;