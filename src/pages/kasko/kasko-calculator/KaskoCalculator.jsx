import { useState } from 'react';
import { useHistory } from 'react-router';

import { Footer } from '../../../components';
import { MODAL } from '../../../modals';

import CheckboxIcon from './checkbox.svg';
import './KaskoCalculator.scss';

function KaskoCalculator({ onModalShow }) {
  const { location } = useHistory();

  const [form, setForm] = useState({
    autoNumber: location.state.autoNumber || '',
    amount: '',
    agreement: true,
  });

  const submitForm = (event) => {
    event.preventDefault();
    onModalShow(MODAL.REQUEST);
  };

  return (
    <section className='calculator'>
      <form
        className='calculator__form'
        onSubmit={(event) => submitForm(event)}
      >
        <h3 className='text-center calculator__heading'>Оставить заявку</h3>

        <div className='form-group'>
          <div className='input-group'>
            <input
              type='text'
              name='number'
              value={form.autoNumber}
              onChange={(event) => {
                setForm({ ...form, autoNumber: event.target.value });
              }}
              placeholder='Введите гос.номер авто:'
            />
            <img
              className='input-suffix'
              src='/assets/icons/calculator/success.svg'
              alt='Правильный номер'
            />
          </div>
        </div>

        <div className='form-group'>
          <input
            type='text'
            name='amount'
            placeholder='Введите cтоимость авто'
            value={form.amount}
            onChange={(event) => {
              setForm({ ...form, amount: event.target.value });
            }}
          />
        </div>

        <div className='form-group'>
          <div className='checkbox '>
            <input
              id='agreement'
              type='checkbox'
              name='agreement'
              checked={form.agreement}
              onChange={(event) => {
                setForm({ ...form, agreement: event.target.value });
              }}
            />
            <label htmlFor='agreement'>
              <img src={CheckboxIcon} alt='Отметить для согласия' />
            </label>
            <span className='checkbox__text'>
              Я согласен с <a href='/'>политикой конфиденциальности</a> и{' '}
              <a href='/'>условиями использования</a> и даю{' '}
              <a href='/'>согласие на обработку моих персональных</a> данных
            </span>
          </div>
        </div>

        <button className='btn btn--primary calculator__btn' type='submit'>
          Узнать стоимость
        </button>
      </form>
      <Footer></Footer>
    </section>
  );
}

export default KaskoCalculator;
