export function getEndpoint(url: string): string {
  const divider = 'api/character';
  return url.split(divider)[1];
}
