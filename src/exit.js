import { UserName } from './userName.js';

const exitFromFM = async() => {
  process.stdin.on('data', (chunk) => {
    const inputData = chunk.toString().trim().toLowerCase();
    if (inputData === 'exit') {
      console.log(`Thank you for using File Manager, ${UserName()}, goodbye!`)
      process.exit(0);
    }
  })
}

export { exitFromFM } ;