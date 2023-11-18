import { IResponse } from '../types/Response';

function getNumber(value: string) {
  value.split;
  const [, queries] = value.split('?');
  const [, pageQuery] = queries.split('=');
  const [page] = pageQuery.split('&');
  return +page;
}

export function getPageNumber(data: IResponse['info']) {
  const { next, prev } = data;
  if (!next && !prev) {
    return 0;
  } else if (next && !prev) {
    return 1;
  } else if (prev) {
    return getNumber(prev) + 1;
  } else {
    return 1;
  }
}
