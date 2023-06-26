const UserName = () => {
  let userName = '';

  try {
    const argArr = process.argv.slice(2);
    const userNameForCheck = argArr.filter((arg) => arg.split('=')[0] === '--username' && ((arg.split('=')[1] ?? '') !== ''))[0];
    userName = userNameForCheck ? userNameForCheck.split('=')[1] : 'Stranger';
  } catch {
    userName = 'Stranger';
  }  
  
  return userName;
}
const USERNAME = UserName();
export { USERNAME };




