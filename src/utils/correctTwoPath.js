import path from 'path';

const correctTwoPath = (argArr) => {
  const src = path.resolve(argArr[1]);
  const dest = path.resolve(argArr[2]);
  return [src, dest];
}

export { correctTwoPath };