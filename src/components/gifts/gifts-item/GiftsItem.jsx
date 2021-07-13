import { useState } from 'react';
import './GiftsItem.scss';

function GiftsItem({ gift, isSelectable, index, listLength, onToggle }) {
  const itemStyle = {
    backgroundColor: gift.backgroundColor,
    color: gift.textColor,
    width: isSelectable ? '100%' : `${100 / listLength}%`,
    marginBottom: isSelectable && index < listLength - 1 ? '16px' : '',
  };

  const titleStyle = {
    color: gift.textColor,
  };

  const descriptionStyle = {
    color: gift.descriptionColor,
  };

  const [isSelected, setIsSelected] = useState(false);

  return (
    <div
      className={`gifts__item ${
        gift.isDisabled ? 'gifts__item--disabled' : ''
      }`}
      style={itemStyle}
    >
      <article className='gifts__content'>
        <h3
          style={titleStyle}
          dangerouslySetInnerHTML={{
            __html: gift.title,
          }}
        ></h3>
        <p style={descriptionStyle} className='t-base gifts__description'>
          {gift.description}
        </p>

        {isSelected ? (
          <div className='gifts__selected'>
            <button className='btn btn--primary'>Перейти к оплате</button>
            <button className='btn btn--light'>
              <img
                className='btn__icon'
                src='/assets/icons/gifts/selected.svg'
                alt='Вы выбрали этот подарок'
              />
              <span>Вы выбрали этот подарок</span>
            </button>
          </div>
        ) : isSelectable ? (
          <button
            onClick={() => {
              if (gift.isDisabled) {
                return;
              }

              setIsSelected(true);
              onToggle(true);
            }}
            className='gifts__select-button btn btn--primary'
          >
            Выбрать подарок
          </button>
        ) : (
          <p className='color-primary'>
            • Другие подарки зависят от выбранного предложения.
          </p>
        )}
      </article>

      <div className='gifts__img'>
        <img src={gift.img} alt={gift.title} />
      </div>

      {isSelected ? (
        <button
          onClick={() => {
            onToggle(false);
            setIsSelected(false);
          }}
          className='gifts__unselect'
        >
          <img src='/assets/icons/gifts/unselect.svg' alt='Убрать выделение' />
        </button>
      ) : (
        ''
      )}
    </div>
  );
}

export default GiftsItem;
