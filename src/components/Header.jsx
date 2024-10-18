import { Link, NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <header>
      <Link to='/' className='site-logo'>
        #vanlife
      </Link>
      <nav>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/vans'>Vans</NavLink>
      </nav>
    </header>
  );
};
