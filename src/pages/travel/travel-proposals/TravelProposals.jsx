import { useState } from 'react';
import { useHistory } from 'react-router';

import InputRange from 'react-input-range';
import NumberFormat from 'react-number-format';
import DatePicker from 'react-datepicker';

import { Footer, Proposals, SelectInput } from '../../../components';
import { DATEPICKER_CONFIG } from '../../../configs';
import { MODAL } from '../../../modals';

import { COUNTRIES } from '../Travel-countries';

import CheckboxIcon from './checkbox.svg';

import './TravelProposals.scss';

function TravelProposals({ proposals, onModalShow, pageStyle }) {
  const history = useHistory();

  const onProposalSelect = (proposal) => {
    const plan = {
      img: proposal.image,
      title: proposal.title,
      price: proposal.price,
    };

    onModalShow(MODAL.TRAVEL, { plan });
  };

  const rangeConfig = {
    min: 10000,
    max: 100000,
    step: 10000,
  };

  const countryObject = COUNTRIES.find(
    (country) => country?.value === history?.location.state.country
  );

  const [form, setForm] = useState({
    country: countryObject?.value || '',
    dateFrom: new Date(),
    dateTo: '',
    iin: '',
    amount: 10000,
    activity: '',
    sport: '',
    isShengen: countryObject?.groupValue === 'isShengen' || false,
    isSecond: countryObject?.groupValue === 'isSecond' || false,
    isOthers: countryObject?.groupValue === 'isOthers' || false,
    agreement: true,
  });

  const activities = [
    {
      value: 'tourism',
      label: 'Туризм',
    },
    {
      value: 'business-trip',
      label: 'Деловая поездка',
    },
    {
      value: 'sport',
      label: 'Спорт',
    },
    {
      value: 'study',
      label: 'Учеба',
    },
    {
      value: 'work',
      label: 'Работа за границей',
    },
  ];

  const sports = [
    {
      label: 'Зимние виды спорта (кроме горнолыжных и прыжков с трампливнов)',
      value: 'Зимние виды спорта (кроме горнолыжных и прыжков с трампливнов)',
    },
    {
      label: 'Горнолыжный спорт (в т.ч. прыжки с трамплинов)',
      value: 'Горнолыжный спорт (в т.ч. прыжки с трамплинов)',
    },
    { label: 'Плавание', value: 'Плавание' },
    {
      label: 'Подводное плавание, дайвинг',
      value: 'Подводное плавание, дайвинг',
    },
    { label: 'Прыжки в воду', value: 'Прыжки в воду' },
    { label: 'Авто и мотогонки', value: 'Авто и мотогонки' },
    { label: 'Велосипедный спорт', value: 'Велосипедный спорт' },
    { label: 'Альпинизм и скалолазание', value: 'Альпинизм и скалолазание' },
    { label: 'Рафтинг и сплав по рекам', value: 'Рафтинг и сплав по рекам' },
    { label: 'Гимнастика и акробатика', value: 'Гимнастика и акробатика' },
    { label: 'Игровые виды спорта', value: 'Игровые виды спорта' },
    { label: 'Легкая атлетика', value: 'Легкая атлетика' },
    { label: 'Тяжелая атлетика', value: 'Тяжелая атлетика' },
    { label: 'Единоборства', value: 'Единоборства' },
    {
      label: 'Дельтапланеризм, парапланеризм, парашютный спорт',
      value: 'Дельтапланеризм, парапланеризм, парашютный спорт',
    },
    { label: 'Горный туризм', value: 'Горный туризм' },
    { label: 'Конный спорт', value: 'Конный спорт' },
    { label: 'Парусный спорт', value: 'Парусный спорт' },
    { label: 'Иные виды спорта', value: 'Иные виды спорта' },
    { label: 'Активный отдых', value: 'Активный отдых' },
  ];

  const checkboxGroups = [
    {
      label: 'Страны Шенгенского соглашения',
      key: 'isShengen',
      isDisabled: true,
      hasShengenModal: true,
    },
    {
      label: 'США, Канада, Япония и Новая Зеландия',
      key: 'isSecond',
      isDisabled: true,
    },
    {
      label: 'Страны, не вошедшие в первые 2 пункта',
      key: 'isOthers',
      isDisabled: true,
    },
    {
      label: `Я согласен с <a href='#'>политикой конфиденциальности</a> и ${' '}
      <a href='#'>условиями использования</a> и даю ${' '}
      <a href='#'>согласие на обработку моих персональных</a> данных`,
      key: 'agreement',
      isDisabled: false,
    },
  ];

  const [mappedProposals, setMappedProposals] = useState(proposals);

  const recalculateAddingAmount = ({
    dateFrom = form.dateFrom,
    dateTo = form.dateTo,
    isShengen = form.isShengen,
  }) => {
    if (!dateTo || !dateFrom) {
      return;
    }

    const ONE_DAY_MS = 1000 * 60 * 60 * 24;

    const fromMs = dateFrom.getTime();
    const toMs = dateTo.getTime();

    const difference_ms = toMs - fromMs;

    const days = Math.round(difference_ms / ONE_DAY_MS) + 2;
    const addPricePerDay = isShengen ? 600 : 450;

    const mapped = [...mappedProposals].map((proposal) => {
      proposal.price = days * (proposal.pricePerDay + addPricePerDay);
      return proposal;
    });

    setMappedProposals(mapped);
  };

  const countryChangeHandler = (country) => {
    const groupValue = COUNTRIES.find((item) => item.value === country)
      .groupValue;

    const isShengen = groupValue === 'isShengen';

    setForm({
      ...form,
      country,
      isShengen,
      isSecond: groupValue === 'isSecond',
      isOthers: groupValue === 'isOthers',
    });

    recalculateAddingAmount({ isShengen });
  };

  const dateFromChangeHandler = (dateFrom) => {
    setForm({ ...form, dateFrom });
    recalculateAddingAmount({ dateFrom });
  };

  const dateToChangeHandler = (dateTo) => {
    setForm({ ...form, dateTo });
    recalculateAddingAmount({ dateTo });
  };

  const amountChangeHandler = (amount) => {
    setForm({ ...form, amount });
    recalculateAddingAmount({});
  };

  const renderCheckboxGroup = ({ label, key, hasShengenModal, isDisabled }) => {
    return (
      <div className='checkbox'>
        <input
          id={key}
          type='checkbox'
          name={key}
          checked={form[key]}
          onChange={(event) => {
            if (isDisabled) {
              return;
            }

            setForm({ ...form, [key]: !form[key] });
          }}
        />
        <label htmlFor={key}>
          <img src={CheckboxIcon} alt='Выбрать' />
        </label>
        <span className='travel-proposals__checkbox-row'>
          <span
            className='checkbox__text'
            dangerouslySetInnerHTML={{
              __html: label,
            }}
          ></span>
          {hasShengenModal ? (
            <button
              className='travel-proposals__checkbox-shengen'
              onClick={() => {
                onModalShow(MODAL.SHENGEN);
              }}
            >
              <img
                src='/assets/icons/travel/shengen.svg'
                alt='Страны Шенгенского соглашения'
              />
            </button>
          ) : (
            ''
          )}
        </span>
      </div>
    );
  };

  return (
    <section style={pageStyle} className='travel-proposals'>
      <section className='container'>
        <h3 className='travel-proposals__heading'>
          Страхование для <br /> путешествий за границу
        </h3>

        <section className='travel-proposals__content'>
          <div className='travel-proposals__form'>
            <div className='form-group form-group--fullsize'>
              <SelectInput
                value={form.country}
                list={COUNTRIES}
                placeholder='Выберите страну'
                onChange={countryChangeHandler}
              ></SelectInput>
            </div>
            <div className='form-group form-group--fullsize'>
              <DatePicker
                locale={DATEPICKER_CONFIG.LOCALE}
                selected={form.dateFrom}
                placeholderText='Дата отправки'
                dateFormat={DATEPICKER_CONFIG.FORMAT}
                onChange={dateFromChangeHandler}
                maxDate={form.dateTo}
              />
            </div>
            <div className='form-group form-group--fullsize'>
              <DatePicker
                locale={DATEPICKER_CONFIG.LOCALE}
                selected={form.dateTo}
                placeholderText='Дата прибытия'
                dateFormat={DATEPICKER_CONFIG.FORMAT}
                onChange={dateToChangeHandler}
                minDate={form.dateFrom}
              />
            </div>

            <div className='form-group form-group--fullsize'>
              <label htmlFor='range'>Страховая сумма</label>
              <h6 className='travel-proposals__amount'>
                <NumberFormat
                  thousandSeparator={' '}
                  thousandsGroupStyle='thousand'
                  suffix={' $'}
                  value={form.amount}
                  displayType={'text'}
                ></NumberFormat>
              </h6>

              <InputRange
                step={rangeConfig.step}
                maxValue={rangeConfig.max}
                minValue={rangeConfig.min}
                value={form.amount}
                onChange={amountChangeHandler}
              />
            </div>

            <div className='form-group form-group--fullsize'>
              <SelectInput
                value={form.activity}
                list={activities}
                placeholder='Чем планируете заниматься?'
                onChange={(selected) => {
                  setForm({ ...form, activity: selected });
                }}
              ></SelectInput>
            </div>

            {form.activity === 'sport' ? (
              <div className='form-group form-group--fullsize'>
                <SelectInput
                  value={form.sport}
                  list={sports}
                  placeholder='Каким видом ?'
                  onChange={(selected) => {
                    setForm({ ...form, sport: selected });
                  }}
                ></SelectInput>
              </div>
            ) : (
              ''
            )}

            <div className='form-group form-group--fullsize'>
              {checkboxGroups.map((group, index) => {
                return (
                  <div className='travel-proposals__checkbox' key={index}>
                    {renderCheckboxGroup(group)}
                  </div>
                );
              })}
            </div>
          </div>

          <Proposals
            proposals={mappedProposals}
            onModalShow={onModalShow}
            onSelect={onProposalSelect}
          ></Proposals>
        </section>
      </section>

      <Footer></Footer>
    </section>
  );
}

export default TravelProposals;
