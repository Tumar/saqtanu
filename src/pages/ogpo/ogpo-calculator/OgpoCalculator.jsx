import { useState } from 'react';
import { useHistory } from 'react-router';

import DatePicker from 'react-datepicker';
import dayjs from 'dayjs';

import { Breadcrumbs, Footer, Users } from '../../../components';
import { DATEPICKER_CONFIG } from '../../../configs';

import OgpoCars from '../ogpo-cars/OgpoCars';

import CheckboxIcon from './checkbox.svg';

import './OgpoCalculator.scss';

function OgpoCalculator() {
  const history = useHistory();

  const breadcrumbs = [
    {
      href: '/ogpo',
      label: 'ОГПО',
    },
    {
      href: '/ogpo/calculator',
      label: 'Калькулятор',
    },
  ];

  const [cars] = useState(['A 000 QWE']);
  const [duration] = useState('Cрок действия полиса - 12 месяцев');
  const [users, setUsers] = useState(['Тимур Серикбай', 'Аслан Харыс']);

  const [form, setForm] = useState({
    autoNumber: history?.location.state?.autoNumber || '',
    iin: '',
    phone: '',
    date: dayjs().add(1, 'day').toDate(),
    promocode: '',
    agreement: true,
  });

  const submitForm = (event) => {
    event.preventDefault();
    history.push('/ogpo/proposals', {
      users,
      cars,
      autoNumber: form.autoNumber,
    });
  };

  return (
    <section className='calculator ogpo-calculator'>
      <form
        className='calculator__form ogpo-calculator__form'
        onSubmit={(event) => submitForm(event)}
      >
        <Breadcrumbs list={breadcrumbs} isDark={true}></Breadcrumbs>

        <h3 className='text-center calculator__heading'>Калькулятор</h3>

        <div className='ogpo-calculator__row'>
          <div className='ogpo-calculator__group'>
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
            <OgpoCars cars={cars}></OgpoCars>
          </div>

          <div className='ogpo-calculator__group'>
            <div className='input-group'>
              <input
                type='text'
                name='iin'
                placeholder='Введите ИНН'
                value={form.iin}
                onChange={(event) => {
                  setForm({ ...form, iin: event.target.value });
                }}
              />
              <button className='input-suffix btn btn--link'>
                <img
                  className='btn__icon'
                  src='/assets/icons/calculator/add.svg'
                  alt='Добавить'
                />
                <span>Добавить</span>
              </button>
            </div>
            <Users users={users} setUsers={setUsers} isEditable={true}></Users>
          </div>
        </div>

        <div className='ogpo-calculator__row'>
          <div className='ogpo-calculator__group'>
            <div className='input-group'>
              <input
                type='text'
                name='phone'
                placeholder='Введите номер телефона'
                value={form.phone}
                onChange={(event) => {
                  setForm({ ...form, phone: event.target.value });
                }}
              />
            </div>
          </div>

          <div className='ogpo-calculator__group'>
            <DatePicker
              locale={DATEPICKER_CONFIG.LOCALE}
              selected={form.date}
              placeholderText='Дата окончания полиса'
              dateFormat={DATEPICKER_CONFIG.FORMAT}
              onChange={(date) => {
                setForm({ ...form, date });
              }}
            />
            {duration ? (
              <div className='badge badge--gray'>{duration}</div>
            ) : (
              ''
            )}
          </div>
        </div>

        <div className='form-group'>
          <input
            type='text'
            name='phone'
            placeholder='Введите промокод'
            value={form.promocode}
            onChange={(event) => {
              setForm({ ...form, promocode: event.target.value });
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

export default OgpoCalculator;
