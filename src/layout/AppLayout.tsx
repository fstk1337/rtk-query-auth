import { NavLink, Outlet } from 'react-router-dom';

import './AppLayout.css';

export const AppLayout = () => (
  <>
    <nav className='nav'>
      <NavLink className='nav-link' to='/login'>
        Login
      </NavLink>
      <NavLink className='nav-link' to='/register'>
        Register
      </NavLink>
      <NavLink className='nav-link' to='/profile'>
        Profile
      </NavLink>
    </nav>
    <Outlet />
  </>
);
