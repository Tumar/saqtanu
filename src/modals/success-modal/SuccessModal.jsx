import { MODAL } from '..';
import './SuccessModal.scss';

function SuccessModal({ onModalClose }) {
  return (
    <section className='modal'>
      <div className='modal__header'>
        <strong className='t-large modal__title'>
          Мы получили вашу заявку!
        </strong>
        <button
          className='modal__close'
          onClick={() => {
            onModalClose(MODAL.SUCCESS);
          }}
        >
          <img src='/assets/icons/modal/close.svg' alt='Закрыть' />
        </button>
      </div>
      <p className='success-modal__description modal__description'>
        Представители выбранной страховой компании свяжутся с вами в ближайшее
        время 👌
      </p>
    </section>
  );
}

export default SuccessModal;
