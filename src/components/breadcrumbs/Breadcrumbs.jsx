import { NavLink } from 'react-router-dom';

import './Breadcrumbs.scss';

function Breadcrumbs({ list, isDark }) {
  return (
    <nav className={`breadcrumbs ${isDark ? 'breadcrumbs--dark' : ''}`}>
      <NavLink to='/'>Главная</NavLink>
      {list.map((item, index) => {
        return <NavLink key={index} to={item.href}>{item.label}</NavLink>;
      })}
    </nav>
  );
}

export default Breadcrumbs;
