import { Breadcrumbs } from '../../../components';

import './CovidHero.scss';

function CovidHero() {
  const mainTitle = 'Страхование от коронавируса';
  const breadcrumbs = [
    {
      href: 'covid',
      label: mainTitle,
    },
  ];
  return (
    <section className='hero covid-hero'>
      <section className='container'>
        <div className='hero__wrap covid-hero__wrap'>
          <div className='hero__content covid-hero__content'>
            <Breadcrumbs list={breadcrumbs}></Breadcrumbs>
            <h2 className='color-white'>{mainTitle}</h2>
          </div>
          <div className='hero__img covid-hero__img'>
            <img src='/assets/img/covid/hero.png' alt={mainTitle} />
          </div>
        </div>
      </section>
    </section>
  );
}

export default CovidHero;
