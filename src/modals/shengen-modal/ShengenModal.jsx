import { MODAL } from '..';
import './ShengenModal.scss';

function ShengenModal({ onModalClose }) {
  return (
    <section className='modal'>
      <div className='modal__header shengen-modal__header'>
        <h6>Страны Шенгенского соглашения</h6>
        <button
          className='modal__close'
          onClick={() => {
            onModalClose(MODAL.SHENGEN);
          }}
        >
          <img src='/assets/icons/modal/close.svg' alt='Закрыть' />
        </button>
      </div>
      <p className='modal__description color-blackest'>
        <strong>
          В настоящее время в шенгенскую зону входят 26 европейских государств:
        </strong>
      </p>
      <p className='shengen-modal__description modal__description color-blackest'>
        Австрия, Бельгия, Венгрия, Германия, Греция, Дания, Италия, Исландия,
        Испания, Латвия, Литва, Лихтенштейн, Люксембург, Мальта, Нидерланды,
        Норвегия, Польша, Португалия, Словакия, Словения, Финляндия, Франция,
        Чехия, Швейцария, Швеция, Эстония.) +Болгария и Турци
      </p>
    </section>
  );
}

export default ShengenModal;
