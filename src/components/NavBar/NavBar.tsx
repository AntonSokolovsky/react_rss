import { PATH } from '../../constants/Path';
import NavItem from '../NavLink/NavItem';

type NavItemsType = {
  name: string;
  path: string;
};
const navItems: NavItemsType[] = [
  { name: 'Home', path: PATH.HOME },
  { name: 'Uncontrolled Form', path: PATH.FORM_UNCONTROL },
  { name: 'Form with hook', path: PATH.FORM_WITH_HOOK },
];
export default function NavBar() {
  return (
    <>
      <ul>
        {navItems.map(({ name, path }) => (
          <li key={name}>
            <NavItem name={name} path={path} />
          </li>
        ))}
      </ul>
    </>
  );
}
