import { MODAL } from '..';
import './ConditionsModal.scss';

function ConditionsModal({ onModalClose }) {
  return (
    <section className='modal'>
      <div className='modal__header'>
        <strong className='t-large modal__title'>Условия СК </strong>
        <button
          className='modal__close'
          onClick={() => {
            onModalClose(MODAL.CONDITIONS, { showSuccess: true });
          }}
        >
          <img src='/assets/icons/modal/close.svg' alt='Закрыть' />
        </button>
      </div>
      <p className='conditions-modal__description modal__description'>
        Отправляя заявку вы даете свое согласие на сбор и обработку{' '}
        <a className='link-blue' href='/'>
          персональных данных
        </a>
        , а также соглашаетесь с условиями{' '}
        <a className='link-blue' href='/'>
          пользовательского соглашения
        </a>
      </p>
    </section>
  );
}

export default ConditionsModal;
