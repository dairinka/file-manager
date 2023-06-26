const checkTwoPathArgument = (argArr) => {
  if(argArr[1] === argArr[2] ){
    console.log('Operation failed: try to use different path');
    return false;
  } 
  
  if(((argArr[1] ?? '') === '' )|| ((argArr[2] ?? '') === '')) {
    console.log('Operation failed: try to use correct path');
    return false;
  }
  return true;
}

export { checkTwoPathArgument };