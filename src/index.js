import { UserName } from './userName.js';
import { exitFromFM } from './exit.js';
//import { fs } from 'fs/promise';

// const welcomeMessage = async () => {
//   const userName = fs.
// }
const welcomeMessage = `Welcome to the File Manager, ${UserName()}!`;
console.log(welcomeMessage);

exitFromFM();