import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export function Layout() {
  return (
    <>
      <header>Header</header>
      <Suspense fallback={<div>Div</div>}>
        <Outlet></Outlet>
      </Suspense>
    </>
  );
}
