import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';

export function Layout() {
  return (
    <>
      <header>
        <h1>React Forms with RSS</h1>
        <NavBar />
      </header>
      <Suspense fallback={<div>Div</div>}>
        <Outlet></Outlet>
      </Suspense>
    </>
  );
}
