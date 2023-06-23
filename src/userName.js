const UserName = () => {
  let userName = '';

  try {
    userName = process.argv.slice(2)[0].split('=')[1];
  } catch {
    userName = 'Stranger';
  }  
  
  return userName;
}

export { UserName };




