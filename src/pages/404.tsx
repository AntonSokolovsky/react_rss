import Link from 'next/link';

export default function ErrorPage() {
  return (
    <>
      <h1>404 error</h1>
      <p>Not found</p>
      <Link href="/">
        <button>Go home</button>
      </Link>
    </>
  );
}
