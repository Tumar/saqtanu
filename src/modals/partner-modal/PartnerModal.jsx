import { useState } from 'react';
import { MODAL } from '..';

import './PartnerModal.scss';

function PartnerModal({ onModalClose }) {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    company: '',
  });

  const submitForm = (event) => {
    event.preventDefault();
    console.log(form);
    onModalClose(MODAL.PARTNER, { showSuccess: true });
  };

  const companies = [
    { value: 'company', label: 'Страховая компания' },
    { value: 'agent', label: 'Страховой агент' },
    { value: 'lead', label: 'Лидогенератор' },
    { value: 'other', label: 'Прочее' },
  ];

  return (
    <section className='modal modal--dark'>
      <div className='modal__header'>
        <strong className='t-large modal__title'>
          💼 Хотите стать партнером ?
        </strong>
        <button
          className='modal__close'
          onClick={() => {
            onModalClose(MODAL.PARTNER);
          }}
        >
          <img src='/assets/icons/modal/close-white.svg' alt='Закрыть' />
        </button>
      </div>
      <p className='modal__description'>
        Оставьте заявку с указанием деятельности и мы свяжемся с вами в
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
        <div className='form-group'>
          <div className='select'>
            <select
              value={form.company}
              onChange={(event) => {
                setForm({ ...form, company: event.target.value });
              }}
            >
              <option value=''>Выберите компанию</option>
              {companies.map((company, index) => {
                return (
                  <option key={index} value={company.value}>
                    {company.label}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <button type='submit' className='btn btn--primary modal__submit'>
          Оставить заявку
        </button>
      </form>
    </section>
  );
}

export default PartnerModal;
