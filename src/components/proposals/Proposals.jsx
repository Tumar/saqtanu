import NumberFormat from 'react-number-format';

import { MODAL } from '../../modals';

import './Proposals.scss';

function Proposals({ proposals, onModalShow, onSelect, addAmount = 0 }) {
  return (
    <section className='proposals'>
      {proposals.map((item, index) => {
        return (
          <div key={index} className='proposals__item'>
            <div className='proposals__img'>
              <img src={item.image} alt={item.title} />
            </div>

            {item.list?.length > 0 ? (
              <ul className='proposals__list'>
                {item.list.map((child, childIndex) => {
                  return (
                    <li key={childIndex} className='proposals__child'>
                      <img
                        src='/assets/icons/proposals/list-item.svg'
                        alt={child}
                      />
                      <span>{child}</span>
                    </li>
                  );
                })}
              </ul>
            ) : (
              ''
            )}

            {item.hasConditions ? (
              <div className='proposals__conditions'>
                <div className='t-tiny color-blackest'>Условия СК</div>
                <a
                  href='/'
                  onClick={(event) => {
                    event.preventDefault();
                    onModalShow(MODAL.CONDITIONS);
                  }}
                  className='link-blue'
                >
                  Посмотреть
                </a>
              </div>
            ) : (
              ''
            )}

            {item.isBuyable ? (
              <button
                onClick={() => {
                  onSelect(item);
                }}
                className='btn btn--primary btn--fullsize btn--baseline'
              >
                <span>Купить за</span>
                <NumberFormat
                  thousandSeparator={' '}
                  thousandsGroupStyle='thousand'
                  suffix={' ₸'}
                  value={item.price + addAmount}
                  displayType={'text'}
                ></NumberFormat>
              </button>
            ) : (
              ''
            )}
            {item.isChoosable ? (
              <div className='proposals__choose'>
                <h6 className='color-blackest'>
                  <NumberFormat
                    thousandSeparator={' '}
                    thousandsGroupStyle='thousand'
                    suffix={' ₸'}
                    value={item.price + addAmount}
                    displayType={'text'}
                  ></NumberFormat>
                </h6>
                <button
                  onClick={() => {
                    onSelect(item);
                  }}
                  className='btn btn--primary btn--fullsize'
                >
                  Выбрать
                </button>
              </div>
            ) : (
              ''
            )}

            {item.hasGift ? (
              <button className='btn btn--link color-blue proposals__gift'>
                <img
                  src='/assets/icons/proposals/gift.svg'
                  alt='Подарок при покупке'
                />
                <span>Подарок при покупке</span>
              </button>
            ) : (
              ''
            )}
          </div>
        );
      })}
    </section>
  );
}

export default Proposals;
