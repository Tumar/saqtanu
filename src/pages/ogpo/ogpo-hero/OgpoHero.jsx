import { useState } from 'react';
import { useHistory } from 'react-router';
import './OgpoHero.scss';

function OgpoHero() {
  const mainTitle = 'ОГПО онлайн';

  const history = useHistory();

  const [autoNumber, setAutoNumber] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const submitForm = (event) => {
    event.preventDefault();

    setIsSubmitted(true);

    if (!autoNumber) {
      return;
    }

    history.push('/ogpo/calculator', {
      autoNumber,
    });
  };

  return (
    <section className='hero ogpo-hero'>
      <section className='container'>
        <div className='hero__wrap'>
          <article className='hero__article'>
            <h2 className='color-white'>{mainTitle}</h2>
            <p className='t-large color-white'>
              Рассчитайте стоимость полиса у лидеров страхового рынка. Оформите
              ОГПО по самым выгодным условиям
            </p>
            <form
              className='hero__form'
              onSubmit={(event) => submitForm(event)}
            >
              <input
                className={isSubmitted && !autoNumber ? 'input-invalid' : ''}
                type='text'
                placeholder='Введите гос.номер авто:'
                value={autoNumber}
                onChange={(event) => {
                  setAutoNumber(event.target.value);
                }}
              />
              <button type='submit' className='btn btn--primary'>
                Продолжить
              </button>
            </form>
          </article>
          <div className='hero__img'>
            <img src='/assets/img/ogpo/hero.png' alt={mainTitle} />
          </div>
        </div>
      </section>
    </section>
  );
}

export default OgpoHero;
