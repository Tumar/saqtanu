import { useState } from 'react';
import './PlanModal.scss';

function PlanModal({ onModalClose, plan, title, key }) {
  const [form, setForm] = useState({
    name: '',
    phone: '',
  });

  const submitForm = (event) => {
    event.preventDefault();
    console.log(form);
    onModalClose(key, { showSuccess: true });
  };

  return (
    <section className='modal'>
      <div className='modal__header'>
        <strong
          className='t-large modal__title'
          dangerouslySetInnerHTML={{
            __html: title,
          }}
        ></strong>
        <button
          className='modal__close'
          onClick={() => {
            onModalClose(key);
          }}
        >
          <img src='/assets/icons/modal/close.svg' alt='Закрыть' />
        </button>
      </div>
      <div className='plan-modal__plan'>
        <img src={plan.img} alt={plan.title} />
        <div className='t-large modal__title'>{plan.price}</div>
      </div>
      <form onSubmit={(event) => submitForm(event)} className='modal__form'>
        <div className='form-group'>
          <input
            type='text'
            value={form.name}
            onChange={(event) => {
              setForm({ ...form, name: event.target.value });
            }}
            placeholder='Имя'
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
        <p className='plan-modal__description modal__description'>
          Отправляя заявку вы даете свое согласие на сбор и обработку{' '}
          <a className='link-blue' href='/'>
            персональных данных
          </a>
          , а также соглашаетесь с условиями{' '}
          <a className='link-blue' href='/'>
            пользовательского соглашения
          </a>
        </p>
      </form>
    </section>
  );
}

export default PlanModal;
