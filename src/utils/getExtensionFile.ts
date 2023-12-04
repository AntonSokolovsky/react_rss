export function getExtensionFile(fileName: string) {
  const arrFileName = fileName.split('.');
  return arrFileName[arrFileName.length + 1];
}
