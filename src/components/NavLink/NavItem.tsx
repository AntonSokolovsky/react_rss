import { NavLinkProps } from './NavItem.type';
import { NavLink } from 'react-router-dom';

export default function NavItem({ name, path }: NavLinkProps) {
  return (
    <>
      <NavLink to={path}>{name}</NavLink>
    </>
  );
}
