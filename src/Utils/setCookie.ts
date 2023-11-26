export default function setCookie(name: string, value: string) {
  const date = new Date();

  date.setTime(date.getTime() + 7 * 24 * 60 * 60 * 1000);

  document.cookie =
    name + '=' + value + '; expires=' + date.toUTCString() + '; path=/';
}
