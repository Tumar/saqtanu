import { NavLink } from 'react-router-dom';

import { FOOTER_DATA } from './Footer-data';

import './Footer.scss';

function Footer({ isDark }) {
  const list = FOOTER_DATA;

  return (
    <footer className={`footer ${isDark ? 'footer--dark' : ''}`}>
      <section className='container'>
        <div className='footer__content'>
          <span className='t-small footer__text footer__copyright'>
            © 2020 Tumar
          </span>
          <nav className='footer__nav'>
            {list.map((item, index) => {
              if (item.isExternal) {
                return (
                  <a
                    className='t-small footer__text footer__link'
                    target='_blank'
                    rel='noreferrer'
                    key={index}
                    href={item.href}
                  >
                    {item.label}
                  </a>
                );
              }

              return (
                <NavLink
                  className='t-small footer__text footer__link'
                  key={index}
                  to={item.href}
                >
                  {item.label}
                </NavLink>
              );
            })}
          </nav>
          <button className='t-small footer__text footer__link'>
            Стать партнером
          </button>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
