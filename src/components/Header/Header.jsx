import './header.scss';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/images/coffeeroaster.svg';
import MobilaLogo from '../../assets/images/coffeeroaster-mobile.svg';
import MenuIcon from '../../assets/images/menu.svg';

export const Header = () => {
  return (
    <header className='site-header'>
      <div className='container'>
        <div className='site-header__inner'>
          <div>
            <input
              hidden
              type='checkbox'
              id='menu'
            />
            <div className='menu'>
              <div className='menu__links__box'>
                <NavLink
                  className='menu__links'
                  to='/'
                >
                  Home
                </NavLink>
                <NavLink
                  className='menu__links'
                  to='/about'
                >
                  About Us
                </NavLink>
                <NavLink
                  className='menu__links'
                  to='/plan'
                >
                  Create Your Plan
                </NavLink>
              </div>
            </div>
            <label
              htmlFor='menu'
              id='bgm'
            ></label>
          </div>
          <NavLink
            className='logo'
            to='/'
          >
            <picture>
              <source
                media='(max-width: 576px)'
                srcSet={MobilaLogo}
              />
              <img
                className='logo__img'
                src={Logo}
                alt='Cofferoaster'
              />
            </picture>
          </NavLink>
          <nav className='nav'>
            <ul className='nav__list'>
              <li className='nav__item'>
                <NavLink
                  style={({ isActive }) =>
                    isActive ? { color: '#333d4b' } : { color: '#83888f' }
                  }
                  className='nav__link'
                  to='/'
                >
                  {' '}
                  Home{' '}
                </NavLink>
              </li>
              <li className='nav__item'>
                <NavLink
                  style={({ isActive }) =>
                    isActive ? { color: '#333d4b' } : { color: '#83888f' }
                  }
                  className='nav__link'
                  to='/about'
                >
                  {' '}
                  About Us{' '}
                </NavLink>
              </li>
              <li className='nav__item'>
                <NavLink
                  style={({ isActive }) =>
                    isActive ? { color: '#333d4b' } : { color: '#83888f' }
                  }
                  className='nav__link'
                  to='/plan'
                >
                  {' '}
                  Create your plan{' '}
                </NavLink>
              </li>
            </ul>
          </nav>
          <label
            className='menu-label'
            htmlFor='menu'
          >
            <img
              className='site-header__menu'
              src={MenuIcon}
              alt='menu switch button'
            />
          </label>
        </div>
      </div>
    </header>
  );
};
