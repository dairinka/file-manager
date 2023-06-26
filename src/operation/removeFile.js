import { unlink, access } from 'fs/promises';

const removeFile = async (userPath) => {
  try {
    await access(userPath)
    await unlink(userPath);
    process.stdout.write('\x1b[32m');
    console.log(`File ${userPath} was removed \x1b[0m`);
  } catch (err) {
    console.error(`Operation failed: ${err.message}` );
  }

}
export { removeFile };