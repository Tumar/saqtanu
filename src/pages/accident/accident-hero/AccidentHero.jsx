import { useState } from 'react';
import { useHistory } from 'react-router';

import { Breadcrumbs } from '../../../components';

import './AccidentHero.scss';

function AccidentHero() {
  const mainTitle = 'Страхование от несчастных случаев';
  const breadcrumbs = [
    {
      href: 'accident',
      label: mainTitle,
    },
  ];

  const history = useHistory();
  const [age, setAge] = useState('');

  const [isSubmitted, setIsSubmitted] = useState(false);

  const submitForm = (event) => {
    event.preventDefault();
    setIsSubmitted(true);

    if (!age) {
      return;
    }

    history.push('/accident/proposals', {
      age,
    });
  };

  return (
    <section className='hero accident-hero'>
      <section className='container'>
        <div className='hero__wrap'>
          <article className='hero__article'>
            <Breadcrumbs list={breadcrumbs}></Breadcrumbs>
            <h2 className='color-white'>{mainTitle}</h2>
            <p className='t-large color-white'>
              Получите деньги на лечение или ежедневные расходы, если с вами
              произойдет что-то нежелательное
            </p>
            <form
              className='hero__form'
              onSubmit={(event) => submitForm(event)}
            >
              <input
                className={isSubmitted && !age ? 'input-invalid' : ''}
                type='text'
                placeholder='Сколько вам лет ?'
                value={age}
                onChange={(event) => {
                  setAge(event.target.value);
                }}
              />
              <button type='submit' className='btn btn--primary'>
                Рассчитать
              </button>
            </form>
          </article>
          <div className='hero__img'>
            <img src='/assets/img/accident/hero.png' alt={mainTitle} />
          </div>
        </div>
      </section>
    </section>
  );
}

export default AccidentHero;
