import { Link, NavLink } from 'react-router-dom';

export const Header = () => {
  const activeStyles = {
    color: '#161616',
    textDecoration: 'underline',
    fontWeight: 'bold',
  };

  return (
    <header>
      <Link to='/' className='site-logo'>
        #vanlife
      </Link>
      <nav>
        <NavLink
          to='/about'
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          About
        </NavLink>
        <NavLink
          to='/vans'
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Vans
        </NavLink>
        <NavLink
          to='/host'
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Host
        </NavLink>
      </nav>
    </header>
  );
};
