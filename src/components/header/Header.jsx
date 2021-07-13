import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import { MODAL } from '../../modals';

import './Header.scss';
import HeaderLogo from './Header-logo.svg';
import { NAV_LINKS } from './Header-data';

function Header({ onModalShow }) {
  const navLinks = NAV_LINKS;

  let location = useLocation();

  const [isNavShown, setNavShown] = useState(false);
  const [headerClassName, setHeaderClassName] = useState('');

  useEffect(() => {
    setNavShown(false);
    window.scrollTo(0, 0);

    if (location.pathname.includes('ogpo/proposals') || location.pathname.includes('ogpo/gifts')) {
      setHeaderClassName('header--blue');
    } else {
      setHeaderClassName('');
    }
  }, [location]);

  const hasActiveChild = (navLink) => {
    let isActive = false;

    navLink.children.forEach((child) => {
      if (location.pathname.includes(child.href)) {
        isActive = true;
      }
    });

    return isActive;
  };

  return (
    <header className={`header ${headerClassName}`}>
      <div className='container'>
        <div className='header__content'>
          <a className='header__logo' href='/'>
            <img src={HeaderLogo} alt='Saqtanu' />
          </a>
          <button
            className='header__toggle'
            onClick={() => {
              setNavShown(!isNavShown);
            }}
          >
            <img
              src='/assets/icons/header/nav.svg'
              alt={isNavShown ? 'Cкрыть меню' : 'Показать меню'}
            />
          </button>
          <div
            className={`header__collapse ${
              isNavShown ? 'header__collapse--shown' : ''
            }`}
          >
            <div className='header__top'>
              <a className='header__logo' href='/'>
                <img src={HeaderLogo} alt='Saqtanu' />
              </a>
              <button
                className='header__toggle'
                onClick={() => {
                  setNavShown(false);
                }}
              >
                <img
                  src='/assets/icons/header/nav-close.svg'
                  alt='Скрыть меню'
                />
              </button>
            </div>
            <nav className='header__nav'>
              {navLinks.map((link, index) => {
                if (link.children?.length > 0) {
                  return (
                    <div className='header__item dropdown' key={index}>
                      <span
                        className={`header__link dropdown__toggle ${
                          hasActiveChild(link) ? 'header__link--active' : ''
                        }`}
                      >
                        {link.label}
                      </span>
                      <div className='dropdown__menu'>
                        {link.children.map((child, childIndex) => {
                          return (
                            <NavLink
                              activeClassName='header__item--active'
                              className='header__link dropdown__item'
                              key={childIndex}
                              to={child.href}
                            >
                              {child.icon ? (
                                <img
                                  className='dropdown__icon'
                                  src={child.icon}
                                  alt={child.label}
                                />
                              ) : (
                                ''
                              )}
                              <span>{child.label}</span>
                            </NavLink>
                          );
                        })}
                      </div>
                    </div>
                  );
                }

                return (
                  <NavLink
                    activeClassName='header__item--active'
                    className='header__item header__link'
                    key={index}
                    to={link.href}
                  >
                    {link.label}
                  </NavLink>
                );
              })}
            </nav>
            <div className='header__buttons'>
              <button
                className='header__button btn btn--gray'
                onClick={() => {
                  onModalShow(MODAL.PARTNER);
                }}
              >
                <img
                  src='/assets/icons/header/partner.svg'
                  alt='Стать партнером'
                  className='btn__icon'
                />
                <span>Стать партнером</span>
              </button>
              <button
                className='header__button btn btn--primary'
                onClick={() => {
                  onModalShow(MODAL.REQUEST);
                }}
              >
                Оставить заявку
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
