const checkCommand = (arg) => {

  if(arg.match(/^cd*/)){
    const path  = arg.split(' ')[1];
    try {
      process.chdir(path);
    } catch {
      console.log('Operation failed: try to use correct path');
    }
    
  }
}
export { checkCommand };