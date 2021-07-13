import { useState } from 'react';
import { MODAL } from '..';
import './RequestModal.scss';

function RequestModal({ onModalClose }) {
  const [form, setForm] = useState({
    name: '',
    phone: '',
  });

  const submitForm = (event) => {
    event.preventDefault();
    onModalClose(MODAL.REQUEST, { showSuccess: true });
  };

  return (
    <section className='modal request-modal'>
      <div className='modal__header'>
        <strong className='t-large modal__title'>Оставить заявку</strong>
        <button
          className='modal__close'
          onClick={() => {
            onModalClose(MODAL.REQUEST);
          }}
        >
          <img src='/assets/icons/modal/close.svg' alt='Закрыть' />
        </button>
      </div>
      <p className='modal__description'>
        Если у вас остались вопросы, заполните форму и мы свяжемся с Вами в
        ближайшее время
      </p>
      <form onSubmit={(event) => submitForm(event)} className='modal__form'>
        <div className='form-group'>
          <input
            type='text'
            value={form.name}
            onChange={(event) => {
              setForm({ ...form, name: event.target.value });
            }}
            placeholder='Ваше имя'
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            value={form.phone}
            onChange={(event) => {
              setForm({ ...form, phone: event.target.value });
            }}
            placeholder='Ваш номер телефона'
          />
        </div>
        <button type='submit' className='btn btn--primary modal__submit'>
          Оставить заявку
        </button>
      </form>
    </section>
  );
}

export default RequestModal;
