import { unlink, access } from 'fs/promises';

const removeFile = async (userPath) => {
  try {
    await access(userPath)
    await unlink(userPath);
    process.stdout.write('\x1b[32m');
    console.log(`File ${userPath} was removed`);
  } catch (err) {
    console.error(`Operation failed: ${err.message} \x1b[0m` );
  }

}
export { removeFile };