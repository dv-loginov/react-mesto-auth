import { Link, useLocation } from 'react-router-dom';

const Header = ({isLoggedIn}) => {
  // const pathName = useLocation().pathname;
  const link = (pathname) => {
    if (pathname === '/login') {
      return <Link
        className='header__link'
        to='/sign-in'>
        Регистрация
      </Link>
    }
    if (pathname === '/sign-in') {
      return <Link
        className='header__link'
        to='/login'>
        Войти
      </Link>
    }
  }
  return (
    <header className="header">
      <a href="/" className="logo"> </a>
      { link(useLocation().pathname) }
    </header>
  );
}

export default Header;
