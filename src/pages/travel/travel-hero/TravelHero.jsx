import { useState } from 'react';
import { useHistory } from 'react-router';

import { Breadcrumbs, SelectInput } from '../../../components';
import { COUNTRIES } from '../Travel-countries';

import './TravelHero.scss';

function TravelHero() {
  const mainTitle = 'Страхование для путешествий за границу';
  const breadcrumbs = [
    {
      href: 'travel',
      label: mainTitle,
    },
  ];

  const history = useHistory();
  const [country, setCountry] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const submitForm = (event) => {
    event.preventDefault();
    setIsSubmitted(true);

    if (!country) {
      return;
    }

    history.push('/travel/proposals', {
      country,
    });
  };

  return (
    <section className='hero travel-hero'>
      <section className='container'>
        <div className='hero__wrap'>
          <article className='hero__article'>
            <Breadcrumbs list={breadcrumbs}></Breadcrumbs>
            <h2 className='color-white'>{mainTitle}</h2>
            <p className='t-large color-white'>
              Обеспечьте защиту своего здоровья и имущества на время выезда за
              границу
            </p>
            <form
              className='hero__form'
              onSubmit={(event) => submitForm(event)}
            >
              <SelectInput
                className={isSubmitted && !country ? 'input-invalid' : ''}
                value={country}
                list={COUNTRIES}
                placeholder='Выберите страну'
                onChange={(selected) => {
                  setCountry(selected);
                }}
              ></SelectInput>
              <button type='submit' className='btn btn--primary'>
                Продолжить
              </button>
            </form>
          </article>
          <div className='hero__img'>
            <img src='/assets/img/travel/hero.png' alt={mainTitle} />
          </div>
        </div>
      </section>
    </section>
  );
}

export default TravelHero;
