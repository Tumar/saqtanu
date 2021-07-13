import { useState } from 'react';

import './CovidPlansItem.scss';

function CovidPlansItem({ plan, onPlanSelected }) {
  const [isDescriptionShown, setDescriptionShown] = useState(false);

  return (
    <div className='covid-plans__item'>
      <img src={plan.img} alt={plan.title} className='covid-plans__img' />

      {plan.properties.map((property, propertyKey) => {
        return (
          <div key={propertyKey} className='covid-plans__row'>
            <div className='covid-plans__label t-caption'>{property.label}</div>
            <div className='covid-plans__value t-base'>{property.value}</div>
          </div>
        );
      })}

      <article
        className={`covid-plans__description ${
          isDescriptionShown ? 'active' : ''
        }`}
      >
        {plan.descriptions.map((description, descriptionKey) => {
          return (
            <h5 key={descriptionKey} className='covid-plans__description-item'>
              {description}
            </h5>
          );
        })}
      </article>

      <div className='covid-plans__buttons'>
        <button
          className={`btn btn--white-outline ${
            isDescriptionShown ? 'active' : ''
          }`}
          onClick={() => {
            setDescriptionShown(!isDescriptionShown);
          }}
        >
          <span>{isDescriptionShown ? 'Cкрыть' : 'Подробнее'}</span>
          <img
            src='/assets/icons/covid-plans/arrow.svg'
            alt={isDescriptionShown ? 'Cкрыть' : 'Подробнее'}
          />
        </button>

        <button
          className='btn btn--primary'
          onClick={() => {
            onPlanSelected(plan);
          }}
        >
          Выбрать
        </button>
      </div>
    </div>
  );
}

export default CovidPlansItem;
