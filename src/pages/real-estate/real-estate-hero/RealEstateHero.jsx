import { useState } from 'react';
import { useHistory } from 'react-router';
import { Breadcrumbs } from '../../../components';
import './RealEstateHero.scss';

function RealEstateHero() {
  const mainTitle = 'Страхование недвижимости';
  const breadcrumbs = [
    {
      href: 'real-estate',
      label: mainTitle,
    },
  ];

  const history = useHistory();
  const [address, setAddress] = useState('');

  const [isSubmitted, setIsSubmitted] = useState(false);

  const submitForm = (event) => {
    event.preventDefault();

    setIsSubmitted(true);

    if (!address) {
      return;
    }

    history.push('/real-estate/proposals', {
      address,
    });
  };
  return (
    <section className='hero real-estate-hero'>
      <section className='container'>
        <div className='hero__wrap'>
          <article className='hero__article'>
            <Breadcrumbs list={breadcrumbs}></Breadcrumbs>
            <h2 className='color-white'>{mainTitle}</h2>
            <p className='t-large color-white'>
              Получите деньги на ремонт и восстановление квартиры (дома), если
              там произойдет что-то нежелательное
            </p>
            <form
              className='hero__form'
              onSubmit={(event) => submitForm(event)}
            >
              <input
                className={isSubmitted && !address ? 'input-invalid' : ''}
                type='text'
                placeholder='Введите адрес'
                value={address}
                onChange={(event) => {
                  setAddress(event.target.value);
                }}
              />
              <button type='submit' className='btn btn--primary'>
                Рассчитать
              </button>
            </form>
          </article>
          <div className='hero__img'>
            <img src='/assets/img/real-estate/hero.png' alt={mainTitle} />
          </div>
        </div>
      </section>
    </section>
  );
}

export default RealEstateHero;
